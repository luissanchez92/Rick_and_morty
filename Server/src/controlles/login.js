const users=require('../utils/users')

const login=(req,res)=>{
    const {email, password}=req.query;

    const validationUser= users.find(element=>element.email===email && element.password===password);

    if(validationUser) return res.status(200).json({access: true})
    return res.status(404).json({access: false})

}


module.exports={login};