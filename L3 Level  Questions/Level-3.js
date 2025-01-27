// 1.prime//////////////////////////////
function prime(num){
    for(i=2;  i<=Math.sqrt(num);  i++){
        if(num%i===0){
           return num+" this not prime";
        }
    }
      return num+" prime";
   }
   console.log(prime(11));



// 5.fibonacci
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


// 6.Print the below pattern of ‘*’ if n = 3

// *

// * *

// * * *

function petan(n){
    for(i=0;  i<=n;  i++){
        str='';
        for(j=1;  j<=i;  j++){
            str+="*" + '';
        }
        console.log(str)
    }
}petan(4)


// 7.factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); 


//////////////////////////////////////////////
// 8.The co-prime number definition tells us that if the Greatest Common Factor (GCF) of any two
// numbers is 1, then they are said to be co-prime.Given two numbers a and b print if they are "co-prime" or "Not a co-prime"
// For example:
// Test	Result
// areCoPrime(8, 15)
// co-prime
// areCoPrime(12, 18)
// Not a co-prime
function GCF(a,b){
    let max = Math.max(a,b);
    while(max>0){
        if(a%max===0 && b%max===0){
           if(max===1){
               console.log("Co-Prime");
               break;
           }
           else{
               console.log("Not A Co-Prime");
               break;
           }
        }
        max--;
    }
}
GCF(12,18);