//import
let {Sequelize,Model,DataTypes} = require('sequelize')

// connection
let sequelizeCon = new Sequelize({host:"localhost",username:"root",password:"",dialect:"mysql",database:"demo"});

// authenticate
sequelizeCon.authenticate().then(()=>{console.log("connected to db")}).catch((error)=>{ console.log("db connection error",error) })

// class create
class User extends Model {}

// schema
User.init({
    id:{ type:DataTypes.INTEGER,allowNull:false,autoIncrement:true,primaryKey:true },
    name: { type: DataTypes.STRING(55), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull:false, unique:true },
    contact: { type: DataTypes.STRING(12), allowNull: false}
},{ tableName:"user",modelName:"User",sequelize: sequelizeCon })

// User.sync();

// export
module.exports = {User}