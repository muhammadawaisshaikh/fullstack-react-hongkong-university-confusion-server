const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        Min: 1,
        Max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    }
},
{
    timestamps: true
});

const dishSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
        },
        comments: [commentSchema]
    },
{
    timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;