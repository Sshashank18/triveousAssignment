const Cart = require('../models/Cart');
const Order = require('../models/Orders');

module.exports.placeOrder = async (req, res) => {
    try{
        
            let cart = await Cart.findOne({userId: req.user._id});
        
            if(cart){
                let orders = await Order.findOne({userId: req.user.id})
                if(orders){
                    orders.orders.push({cartId: cart._id});
                    orders.save();
                    await Cart.deleteOne({userId: req.user._id})
                    return res.status(200).json(orders);
                }else{
                    let data = {
                        userId: req.user._id,
                        orders:[{cartId:cart._id}]
                    }
                    let order = await Order.create(data);
                    await Cart.deleteOne({userId: req.user._id})
                    return res.status(200).json(order);
                }
            }
            else{
                return res.status(400).json({"message":"Cart Is Empty"});
            }
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}

module.exports.orderHistory = async (req, res) => {
    try{
        let orders = await Order.find({userId: req.user.id});
    
        return res.status(200).json(orders);
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}

module.exports.orderDetail = async (req, res) => {

    try{
            let order = await Order.findById(req.params.id);
        
            return res.status(200).json(order);
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}
