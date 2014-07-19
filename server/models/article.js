/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../config/config'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
        created: {
            type: Date,
            default: Date.now
        },
        title: {
            type: String,
            default: '',
            trim: true
        },
        template:  {
            type: Schema.ObjectId,
            ref: 'Template'
        },        
        articleContent: {
            type: Object,
            default: {}
        },
        urlSegment : {
            type: String,
            default: '',
            trim: true
        },
        user: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        type: {
            type: String,
            trim: true
        },          
        id: {
            type: ObjectId,
            trim: true
        }
    },
    {
        versionKey: false,
        id: true
    }
);

/**
 * Validations
 */
ArticleSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
 
ArticleSchema.statics = {
    // Load static finds by id, populates user nested object
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    },
    // query static finds by other query params, populates user nested object
    query: function (query, cb) {
         this.findOne(query).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Article', ArticleSchema);