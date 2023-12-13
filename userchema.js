
const { sqlcon,Model,DataTypes} = require("./dbconfi1");

class User extends Model {}
User.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    passwoard:{
        type:DataTypes.STRING,
        allowNull:false,
        },
    is_avtive:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    },
    is_deleted:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
},{tableName:"user_info",ModelName:"User",sequelize:sqlcon})


module.exports={User}