(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var s=n(2),o=n.n(s),a=n(14),c=n.n(a),i=(n(24),n(15)),l=n(16),r=n(17),u=n(19),h=n(18),d=n(5),b=n.n(d),j=(n(44),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={title:"",body:"",posts:[]},t.componentDidMount=function(){t.getBlogPost()},t.getBlogPost=function(){b.a.get("/api").then((function(e){t.setState({posts:e.data})})).catch((function(){console.log("error receiving data")}))},t.handleChange=function(e){var n=e.target,s=n.name,o=n.value;t.setState(Object(i.a)({},s,o))},t.submit=function(e){e.preventDefault();var n={title:t.state.title,body:t.state.body};b()({url:"/save",method:"POST",data:n}).then((function(){console.log("Data sent"),t.resetUserInput(),t.getBlogPost()})).catch((function(){return console.log("Internal sevrver error")}))},t.resetUserInput=function(){t.setState({title:"",body:""})},t.displayBlogPosts=function(t){return t.length?t.map((function(t,e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:t.title}),Object(j.jsx)("p",{children:t.body})]},e)})):null},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h2",{children:"MERN-App"}),Object(j.jsxs)("form",{onSubmit:this.submit,children:[Object(j.jsx)("div",{className:"form-input",children:Object(j.jsx)("input",{type:"text",placeholder:"Title",name:"title",value:this.state.title,onChange:this.handleChange})}),Object(j.jsx)("div",{className:"form-input",children:Object(j.jsx)("textarea",{name:"body",placeholder:"Body",cols:"30",rows:"10",value:this.state.body,onChange:this.handleChange})}),Object(j.jsx)("button",{children:"Submit"}),Object(j.jsx)("div",{className:"blog-post__display",children:this.displayBlogPosts(this.state.posts)})]})]})}}]),n}(o.a.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,s=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),o(t),a(t),c(t)}))};c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.8fcecea1.chunk.js.map