const Cart = require('../models/Cart');
const Products = require('../models/products');

module.exports.viewCart = async (req, res) => {
    try{
        let cart = await Cart.find({userId: req.user._id});
        return res.status(200).json(cart);
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}

module.exports.addItemToCart = async (req, res) => {
    try{
        let product = await Products.findById({ _id: req.body.product_ID }).populate('categoryId');
        console.log(product.availibility);
        if(product.availibility === false) return res.status(400).json({"message":'Product Unavailable'});
    
        let cart = await Cart.findOne({userId: req.user._id});
        if(cart){
            let productData = {
                productName: product.title,
                productDescription: product.description,
                productPrice: product.price,
                productCategory: product.categoryId.name,
                quantity: req.body.quantity,
            }
            cart.cartItems.push(productData);
            cart.save();
            return res.status(200).json(cart);
        }
        else{
            let cartItems = []
            let productData = {
                productName: product.title,
                productDescription: product.description,
                productPrice: product.price,
                productCategory: product.categoryId.name,
                quantity: req.body.quantity,
            }
            cartItems.push(productData);
        
            let data = {
                userId: req.user._id,
                cartItems: cartItems
            }
        
            let cart = await Cart.create(data);
            return res.status(200).json(cart);
        }
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}

module.exports.updateCart = async (req, res) => {
    try{
        let cart = await Cart.findOne({userId: req.user._id});
    
        if(cart){
            cart.cartItems.forEach(product => {
                if(product.productName === req.body.productName){
                        product.quantity = req.body.quantity;
                }
            });
            cart.save();
        }
        return res.status(200).json(cart);
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}

module.exports.deleteItemCart = async (req, res) => {

    try{
        let cart = await Cart.findOne({userId: req.user._id});
    
        if(cart){
            cart.cartItems.forEach(product => {
                if(product.productName === req.body.productName){
                    cart.cartItems.remove(product);
                }
            });
            cart.save();
        }
        return res.status(200).json(cart);
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}
