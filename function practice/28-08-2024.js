// a =5;
// b =3;
// console.log(a,b);

// c=a; //c=5
// a=b; //a=3
// b=c; //b=5
// console .log(a,b);

// a=3
// b=5
// c=5
// console .log(a,b,c)

// d=a; //d=

// a=b; //e=5
// b=c; //f=5
// c=d; //g=3
// console .log(d,e,f)

function even(num){
    sum=0;
    for(i=0; i<num.length; i++){
        if(num[i]%2!==0){
            sum+=num[i]
        }
    }console.log(sum)
}
even([1,2,3,4,5,6,7,8,9])


function averg(num){
sum=0;
for(i=0; i<num.length; i++){
    if(num[i]%2==0){
        sum+=num[i]
    }
} 
count=sum/num.length;
console.log(count)   
}averg([1,2,3,4,5,6,7,8,9])


function call (num){
    let sum=0;
    let count=0;
    for(i=0; i<num.length; i++){
        if(num[i]%2==0){
            sum+=num.length
            count++;
        }
    }
    let nevar=sum/count;
    console.log(nevar)
}  call([1,2,3,4,5,6,7,8,9])

function average(num) {
    let sum = 0;
    let count =0;
    for (let i = 0; i < num.length; i++) {
        if (num[i]%2==0){
            sum+=num[i];
            count++;
     }
       
    }
    let ave = sum/count;
    console.log(ave)
}average([2,4,6,8,9]);


function fibonacci(n){
    let a=0;
    let b=1;
    let sum=0;
    for(i=0; i<n; i++){
        console.log(a)
        sum=a+b
        a=b; 
        b=sum;
    }
}fibonacci(10)
