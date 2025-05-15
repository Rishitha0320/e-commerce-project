const usermodel = require('../models/userModel')
const {hashPassword,comparePassword}=require('../helpers/userHelper')
const jwt = require ('jsonwebtoken');

const registerController=async(req,res)=>{
try{

    const {name,email,password,phone,address}=req.body
    //validations
    if(!name){
        return res.send({message:'name is required'})
    }
    if(!email){
        return res.send({message:'email is required'})
    }
    if(!password){
        return res.send({message:'password is required'})
    }
    if(!phone){
        return res.send({message:'phone no is required'})
    }
    if(!address){
        return res.send({message:'address is required'})
    }
//check for existing user
const existingUser= await usermodel.findOne({email})
if(existingUser){
    return res.status(409).send({
        success:false,
        message:'user already registered',
        
    });
}
const hashedPassword=await hashPassword(password)
const user = await new usermodel({
    name,email,phone,address,password:hashedPassword}).save()

    res.status(201).send({
      success:true,
      message:"user registered successfull",
      user
})
}
catch(error){
  console.log("Register error:", error.message);
  res.status(500).send({
    success:false,
    message:'error in registration',
    error:error.message
  });
}


};


//post method 

const loginController=async(req,res)=>{
  
try{


    const {email,password}=req.body

    if(!email || !password){
        return res.status(404).send({
            success:false,
            message:'email and password are required',
        })
    }
    //check user 
    const user= await usermodel.findOne({email})
    if(!user){
       return res.status(404).send({
        success:false,
        message:'user not found',
       })
    }
    const match=await comparePassword(password,user.password)
     if(!match){
        res.status(200).send({
            success:false,
            message:'password is incorrect',
        })
     }
    //token creation
    const token= await jwt.sign({_id:user._id},process.env.JWT_SECRET,{
        expiresIn:'31d',
    });

    res.status(200).send({
        success:true,
        message:'login successful',
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
            role:user.role,
        },
        token:token
    
    });
}
catch(error){
   console.log(error)
   res.status(500).send({
    success:false,
    message:"error in login",
    error
   })
}



}

//to check if this is working
const testController=(req,res)=>{
    
    res.send("protected route");

};



 
// export default {registerController};
module.exports={registerController,loginController,testController};
