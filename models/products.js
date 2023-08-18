const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required: true
    },
    availibility:{
        type:Boolean,
        default: true,
        required: true
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
},{
    timestamps: true
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;