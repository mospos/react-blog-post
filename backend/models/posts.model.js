const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    author: {type: String, required: true },
    body: {type: String, required: true }
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;