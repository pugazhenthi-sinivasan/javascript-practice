// let a=90;
// let b=100;
// let c=80;
// let d=89;
// function add(){
// if(a<b)
//     console.log("a gr")
// }add()

function student(num){
    if(num>=90 && num<=100 ){
        console.log("A grade");
        
    }
    else if(num>=80 && num<=89){
        console.log("B grade");
        
    }
    else if(num>=70 && num<=79){
        console.log('C grade');
        
    }
    else if(num>=31 && num<=69){
        console.log('d grade');
        
    }
    else if(num>=1 && num<=30){
        console.log('fail');
        
    }

    else {
        console.log('not fund');
    }
}
student(100)
student(65)
student(100);
student(1);



function add(a,b){
    
  return a+b;
}
add(20,10)
