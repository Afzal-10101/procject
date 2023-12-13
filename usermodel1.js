let joi = require("joi")
const { User } = require("./userchema");

async function creatUser(req,res){
    let valid = await checkUser(req.body).catch((err)=>{
        return {error:err}
    }) 

    if(!valid || (valid && valid.error)){

        return res.send({error:valid.error})
    }

    let findUser = await User.findOne({where:{email:req.body.email}}).catch((err)=>{
        return {error:err}
    })

    if(findUser ||(findUser && findUser.error)){
        console.log(findUser)
        return res.send({error:"email is already exists"})
    }

    let creatUser = await User.create(req.body).catch((err)=>{
        return{error:err}
    })

    if(!creatUser ||(creatUser && creatUser.error)){
        console.log(creatUser)
        return res.send({error:"internal server error"})
    }
    return res.send({data:creatUser})
}


async function checkUser(params){
    let schema = joi.object({
        email:joi.string().min(10).max(55).required(),
        name:joi.string().min(4).max(55).required(),
        passwoard:joi.string().min(6).max(10).required()
    })

    let valid=await schema.validateAsync(params,{abortEarly:false}).catch((error)=>{
        return {error:err}
    })

    if(!valid||(valid&&valid.error)){
        let msg=[]
        for(let i of valid.error.details){
            msg.push(i.message)
        }
        return {error:msg}
    }
    return {data:valid.data}
}

module.exports={creatUser}