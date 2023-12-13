const { error } = require("console");
const { create } = require("domain");

// impport
let express = require("express")
let joi = require("joi")
let {User} = require("./task")

// insialise
let app = express();
// midellwear
app.use = express()
app.use = (express.urlencoded({extended:true}));

async function createUser(req,res){
let valid=await validateus((req,res)).catch((error)=>{ return{err:error}})
if(!valid || (valid && valid.error )){
    return res.status(400).send({error:valid.error})
}

let user = User.findone({where:{email:req.body.email}}).catch((error)=>{return{err:error}})
if(!create || (user && user.error)){
    return res.send({error:"user already registered"})
}


let create=User.create(req.body).catch((error)=>{return{err:error}})
if(!create || (user && user.error)){
    let error = create && create.error ? create.error : "internal server error"
    return res.status(500).send({error})
}
}

async function validateus(params){
    let schema = joi.object({
        email:joi.string().min(3).max(25).required(),
        contact:joi.string().min(10).max(50).required(),
        password:joi.string().min(10).max(20).required()
    })
    let valid=await schema.validateAsync(params,{abortEarly:false}).catch((error)=>{return(error)})
    if(!valid | (valid && valid.error)){
        let msg = []
        for(let i of valid.error.details){
            msg.push(i.message)
        }
        return res.send({error:msg})
    }
    return res.send({data:valid.data})
}

app.post("/create",createUser)

app.listen(3003,()=>{
    console.log("connected to server");
})