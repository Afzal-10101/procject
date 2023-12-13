// import 
const { log } = require("console");
let {Seqlaize,Model,DataType}= require("seqlaize");
const sequelize = require("sequelize");
const { SourceTextModule } = require("vm");
// connection
let sequelizeCon = new Seqlaize({host:"localhost",username:"root",password:"",dialecat:"mysql",database:"demoapi"}); 
// authentication
sequelizeCon.authenticate().then(()=>{console.log("connected to be db")}).catch((error)=>{ console.log("db connection error",error) })
// class create
class User extends Model{}
// schema
User.init({
    id:{ type:DataType.INTENGER,allowNull:false,autoIncrement:true },
    name: { type:DataType.STRING(55), allowNull: false },
    email:{type:DataType.STRING(255),allowNull:false,unique:true},
    contact:{ type: DataType.STRING(12),allowNull:false}
    },{tableName:"user",modelName:"User",sequelize: sequelizeCon})
// usre.async();

// export
Model.exports = {User}
console.log(id);