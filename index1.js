let express = require("express")
const { creatUser } = require("./usermodel1")
let app = express ()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/user/create",creatUser)

app.listen(3003,()=>{
    console.log("connected to port 3001");
});