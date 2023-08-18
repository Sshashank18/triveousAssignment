const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cartItems:[{
        productName:{
            type:String,
            required: true,
        },
        productDescription:{
            type:String,
            required: true,
        },
        productPrice:{
            type:Number,
            required: true
        },
        productCategory:{
            type: String,
        },
        quantity:{
            type: Number,
            require: true
        }
    }]
},{
    timestamps: true
});

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;