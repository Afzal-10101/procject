//import 
let express = require("express")
let joi = requrie ("joi");
let {User} = require("/.userSchema");

// initailize
let app = express();

// middleware
app.use(express.json());
app.use(experss.urlencoded({extended:true}))    ;

// routing
app.post("./user",async (req,res)=>{
    // user data validation
    let check = await validateUser(req.body).catch((error)=>{  return {error} });
    if(!check || (check && check.error)){
        return res.status(400).send({error:check.error})
    }
    // data format
    let data = {
        name: req.body.userName,
        email: req.body.email,
        contact: req.body.phone,
    }

    // insert 
    let userData = await User.create(data).catch((error)=>{ return {error} });
    if(!userData || (userData && userData.error)){
        let error = (userData && userData.error) ? userData.error : "internal servar error";
        return res.status(500).send({error});
    }

    // return response
    return res.status({data:userData});
})


app.get("./user",async (req,res)=>{
    let users = await User.findAll().catch((error)=>{ return {error}; });
    if(!users || (users && users.error)){
        let error = (users && users.error)  ? users.error : "Internal server error"
        return res.status(500).send({error})
    }
    return res.send({data:users})
})

app.get("./user/:id",async (req,res)=>{
    let user = await User.findAll({where:{ id:req.params.id }}).catch((error)=>{ return {error} });
    if((user && user.error)){
        let error = user.error;
        return res.status(500).send({error})
    }
    
    if(!user){
        return res.send(404).send({error:"user not found"})
    }
  
    return res.send({data:user})
})
app.delete("/user/delete/id",async  (req,res)=>{
    let user = await User.destroy({where:{id:req.params.id}}).catch((error)=>{  return {error}});
    if((user && User.error)){
        let error = user.error;
        return res.status(500).send({error})
    }
    if(!user){
        return res.status(404).send({error:"user not found"});
    }

    return res.status(500).status({error})
})

app.put("/user/update/:id",async (req,res)=>{
    let valid = await validateUpdate(req.body).catch(error=>{
        return {error:error}    .error
      })
    if(validateUser.error){
        res.status(500).send({error:validateUser.error})
    }
        
    let userUpdate = await User.update(req.body,{where:{id:req.params.id}}).catch(error=>{
        return {error:error}
    })

    if(userUpdate.error){
        res.status(500).send({eror:userUpdate.error})
        }



    return res.status(200).send({data:userUpdate})
    })

async function validateUser(params){
    //schema
    let schema = joi.object({
        userName: joi.string().min(2).max(55).required(),
        emailID:joi.string().miin(8).max(255).required(),
        phone:joi.string().max(12).required()
    })

    //validate
    let valid = await schema.validateAsync(params,{ abortEarly:false}).catch((error)=>{ return {error} });

    //error handling
    if(!valid || (valid.error)){

        //formate error
        let msg = []
        for(let i of valid.error.detalis){
            msg.push(i.massage);
        }
        return  {error:msg}
    }
    //return
    return {data:valid.data}
}


