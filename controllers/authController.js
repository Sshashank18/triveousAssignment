const User = require('../models/user');
const jwt = require('jsonwebtoken');
const env = require('../config/env');

module.exports.create = async (req, res) => {
    try{
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            let newUser = await User.create(req.body)
            return res.status(200).json(newUser);
        }
        else {
            return res.status(200).json({"message":"User Already Exists"});
        }
    }
    catch(err){
        return res.status(400).json({error:err});
    }
}

module.exports.createSession = async (req, res) => {
    try{
        let user = await User.findOne({email: req.body.email});
        if(!user || user.password != req.body.password){
            return res.json(422,{
                message: "Invalid Username or Password"
            });
        }
        return res.json(200,{
            message:"Sign in successful, here is your token, please keep it safe.",
            data:{
                token: jwt.sign(user.toJSON(),`${env.JWT_SECRET}`,{expiresIn: '1000000'})
            }
        });
    }
    catch(err){
        console.log(err);
        return res.json(200,{
            message:'Error Signing In'
        })
    }

}
