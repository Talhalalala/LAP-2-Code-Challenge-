const mongoose = require('mongoose');

const postStructure = new mongoose.Schema({
    title: String,
    author: String,
    story: String
});

// make 'Post' lower case if things arent working 
const post = mongoose.model('Post', postStructure)

module.exports = post;