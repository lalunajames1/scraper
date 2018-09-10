var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    article_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    }
})

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;