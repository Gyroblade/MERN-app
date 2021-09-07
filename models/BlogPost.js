const mongoose = require("mongoose");
// Schema
const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: String,
  body: String,
  date: {
    type: String,
    default: new Date().toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
  },
});

//Model
const BlogPost = mongoose.model("BlogPost", postSchema);

module.exports = BlogPost;