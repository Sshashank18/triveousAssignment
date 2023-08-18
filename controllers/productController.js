const Category = require('../models/Category');
const Products = require('../models/products');

module.exports.getAllProducts = async (req,res) =>{
    try{
        let products = await Products.find({});
        return res.status(200).json(products);
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}

module.exports.getProduct = async (req,res) =>{
    try{
        let product = await Products.findById({_id: req.params.id});
        return res.status(200).json(product);
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}

module.exports.createProduct = async (req,res) =>{
    try{
        let category = await Category.find({name: req.body.category});
        if(category){
            req.body.categoryId = category[0]._id;
            let products = await Products.create(req.body);
            return res.status(200).json(products);
        }
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}
