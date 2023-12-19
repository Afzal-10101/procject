// function a() {
//     console.log(arguments);
// }
// a(12,13,14,15,16,17);

// const { type } = require("os");
// const { log } = require("util")

// let b = []
// function add() {
//     for(let i of arguments){
//         b.push(i)
//     }
// }
// add("Afzal","Zaara","love")
// console.log(b);

// let g = []
// function first(){
//     console.log(arguments[1]);
// }
// first(1,2,3,4,5);

// let user ={}

// function createuser(Name,email,contact,address) {
//     if(typeof(Name)!="string"){
//         return("provide Name in string")
//     }
// if(typeof(email)!="string"){
//     return ("provide email in string")
// }
// if (typeof(contact)!="number") {
//     return ("provide contact in number")
// }
// if(typeof(address)!="string"){
//     return("provide address in string")
// }
// {
//     user.Name = Name
//     user.email = email
//     user.contact = contact
//     user.address = address
//     return (user)};
// }
// console.log(createuser("afzal","faf",2345678,"kurala"));


// let admin = {Name :"adnan", age:18, password:786};

// function varify(p1) {
//     if(typeof(p1) != "object"){
//         return("provide admin in object")
//     }
//     if (p1.Name != "adnan"){
//         return("provide name in string")
//     }
//     if(p1.password !="786"){
//         return ("wrong password")
//     }
//     return("you are admin")
// }
// console.log(varify(admin));

// let admin = {Name: "afzal",age:24,passwrd:"0000"};

// function varify(p1){
//     if(typeof(p1) != "object"){
//         return("provide admin in object")
//     }
//     if(p1.Name != "afzal"){
//         return("provide name is string")
//     }
//     if(p1.age != 24){
//         return("porvide age in number")
//     }
//     if(p1.passwrd != "0000"){
//         return("provide number in srting")
//     }
//     return ("you are admin")
// }
// console.log(varify(admin));

// let admin = {name: "afzal",age:23, passwoard:"786786"};
// function varify(name,passwoard){

//     if(admin.name != "afzal" ||
//     admin.age != 23){
//         return("invalid user")
//     }
//     return("you are admin")
// }
// console.log(varify(admin));


// +++++++++++++(ye kaam nai karrta hai)++++++++
// let Admin_Name = "Aman bhai"
// let passwoard = "10101"

// function verifyadmin(Admin_Name,passwoard){
//     if(Admin_Name!=Admin_password!=Admin_passwoard!=passwoard){
//         return("invelide user")
//     }
//     return("wall come user");
// }
// console.log(verifyadmin("Aman bhai","10101"));

// let = passwoard = "10101"
// console.log(verifyadmin("amam bhai", "1010"))


// let admin_of = "afzal"
// let admin_saw = "adnan"
// function varifyadmin(admin_of,admin_saw){


//    if(admin_of!=admin_of || admin_of,admin_saw){        //|| admin_of,admin_saw ye hata ny Par code run hota hai
//     return("invelide loggin")
// }
//     return("valide loggin")
// }
// console.log(varifyadmin("afzal","adnan"));

// function verifyage(age){
//     if(age>18 ){
//         return("are able to vote")
//     }
//     return("not able to vote")
// }
// console.log(verifyage(17));

// let list = [1,2,3,4,5,6,7,8,9,10]
// let life = [1,2]
// let right = []

// for(let i of list){
    
//     if(i < 7){
//         right.push(i)
//     }
// }
// console.log(right);


// function str(L,n){
    
//     let left=[]
//     let righ=[]
//     if(!Array.isArray(L)){
//         return("the list is Array")
//     }

//     if(typeof(n)!="number"){
//         return("provide the number")
//     }
//     for(let i of L){

//         if(i <  n){
//             left.push(i)
//         }
//         if(i > n){
//             righ.push(i)
//         }
//     }
//     return({left,righ})
// }
// console.log(str([1,1,2,3,4,5,6,7,8,9,0,10,11,12,],6));

// let user = [{name: "zareen", email:"zaree@gmail.com", id:1},
// {nmae : "irfan", email : "irfan@gmail.com", id: 2},
// {nmae : "sohail", email : "sohail@gmail.com", id: 3},
// {nmae : "afzal", email : "afzal@gmail.com", id: 4}];
// console.log(user);

