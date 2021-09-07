import React from 'react';
import axios from 'axios';

import './App.css'

class App extends React.Component {
  state ={
    title: '',
    body: '',
    posts:[]
  }

  componentDidMount = ()=>{
    this.getBlogPost()
  }

  getBlogPost = ()=>{
    axios
      .get("/api")
      .then((res) => {
        this.setState({posts: res.data})
        //console.log("data received", res.data);
      })
      .catch(() => {
        console.log("error receiving data");
      });
  }

  handleChange = ({target})=>{
    const {name, value} = target
    //console.log("event: ", event);
    //console.log("this: ", this);
    this.setState({[name]: value})

  }

  submit = (e) =>{
    e.preventDefault();

    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      url:"/save",
      method: 'POST',
      data: payload
    })
    .then(()=>{
      console.log("Data sent")
      this.resetUserInput();
      this.getBlogPost();
  })
    .catch(()=>console.log("Internal sevrver error"))
  }

  resetUserInput =()=>{
    this.setState({ title: '', body: '' });
  }

  displayBlogPosts = (posts)=>{
    if (!posts.length) return null
    //return JSON.stringify(posts);
    //console.log(posts);
    return posts.map((it,index) => {
      //console.log(it.title);
      return (
        <div key={index}>
          <h3>{it.title}</h3>
          <p>{it.body}</p>
        </div>
      );
    })
  }

  render(){
    //console.log("body: ",this.state)
    return (
      <div className="app">
        <h2>MERN-App</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea
              name="body"
              placeholder="Body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button>Submit</button>
          <div className="blog-post__display">
            {
              this.displayBlogPosts(this.state.posts)
            }
          </div>
        </form>
      </div>
    );
  }
}

export default App