//1. Write a program that uses a for loop 
// to iterate through the numbers from 1 to 20. If the number is even,
//  add it to a total sum. At the end of the loop, print the total sum
//   of all even numbers between 1 and 20.

function even(n){
let sum=0;
for(i=0; i<=n; i++){  
    if(i%2==0) 
    sum=sum+i;
}
console.log(sum);
}
even(20)

//2. Print the first n multiples of 3, print 3 6 9 12 15 ... 
// on separate lines. The program should work for different values of n.


function multiple(n){
    for(let i=1;i<n;i++){
        a=i*3
        console.log(a)
    } 
}multiple(10)



let n=10
for(let i=1;i<=n;i++){
    console.log(i)
}


let m=5
for(i=0; i<=m; i++){
    console.log(i)
}

let a=20
for (i=0; i<=a; i++){
    console.log(i);
}


let b=0
for(i=10; i>=b; i--){
    console.log(i);
    
}

   
