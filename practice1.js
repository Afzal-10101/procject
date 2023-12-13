async function jkl() {
  let a =await abc();
  let b =await xyz()
  console.log(a+b)
}

function abc() {
 for (let index = 0; index <= 100; index++) {  
    console.log(index)  
 }
return "abc";
}


function xyz() {
    setTimeout(() => {
    }, 2000);
    return "xyz";
}


jkl()


        