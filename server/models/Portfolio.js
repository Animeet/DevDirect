const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
    resumeLink: {
        type: String,
        required: false,
        trim: true
    },
    githubLink: {
        type: String,
        required: false,
        trim: true
    },
    linkedInLink: {
        type: String,
        required: false,
        trim: true
    },
    portfolioLink: {
        type: String,
        required: false,
        trim: true
    },
    university: {
        type: String,
        required: false,
        trim: true
    },
    bootcamp: {
        type: String,
        required: false,
        trim: true
    },
    //array of languages known
    languages: [{
        type: String,
        required: false,
        trim: true
    }],
    socialMedia: [{
        type: String,
        required: false,
        trim: true
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Portfolio = model('portfolio', portfolioSchema);

module.exports = Portfolio;
