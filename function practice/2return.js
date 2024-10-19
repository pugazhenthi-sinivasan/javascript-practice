
function add(a, b) {
    return a + b;
  }
  let sum = add(2, 3); 
  console.log(sum);


  
function age1(){
    let r=10
    let g=40
    return r+g
}

function age2(){
    return age1();
}

function age3(){
    return age2();
}
console.log(age3())




function testFn1(){
    let a = 10;
    let b =20;
    console.log('ddd')
    return a + b;
    console.log('ddd') 
}

function testFn2(){  
    return testFn1();
}
console.log(testFn2());