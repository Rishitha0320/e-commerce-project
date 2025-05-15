const jwt =require('jsonwebtoken');
const userModel = require('../models/userModel');
//in middleware , i ahev req,res , next(extra in middleware)
const requireSignIn =async(req,res,next)=>{
try{
    const decode=jwt.verify(
              req.headers.authorization,
              process.env.JWT_SECRET
    );
    req.user=decode;
    next();//execute next code
}
    catch(error){
            console.log(error)
    }
}

//admin access

const isadmin= async(req,res,next)=>{
    try{
        const user=await userModel.findById(req.user._id);
        if(user.role!==1){
               return res.status(401).send({
                success:false,
                message:"You are not admin , unauthorized access"
               });
        }
        else{
            next();
        }
    }
    catch(error){
            console.log(error);
            res.status(401).send({
                success:false,
                error,
                message:"You are not admin , unauthorized access"
            })
        
    }
}


module.exports={requireSignIn,isadmin};