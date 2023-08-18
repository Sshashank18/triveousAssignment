const Category = require('../models/Category');

module.exports.getCategories = async (req,res) =>{
    try{
        let categories = await Category.find({});
        return res.status(200).json(categories);
    }
    catch(err){
        return res.status(400).jsonjson({error:err});
    }
}

module.exports.createCategory = async (req,res) =>{
    try{
        let category = await Category.find({name: req.body.name});
        if(!category.length){
            let category = await Category.create(req.body);
            return res.status(200).json(category);
        }
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}
