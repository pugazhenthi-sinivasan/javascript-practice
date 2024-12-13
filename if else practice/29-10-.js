function calling(a,b){
    let number=a*b;
    if(number%6 ===0){
        console.log("yes")
    }
    else{
        console.log("no")
    }
}calling(30,3)





function odd(number) {
    let num=0;
    for(i=0; i<number.length; i++){
        if(number[i]%2!==0){
            num+=number[i];
        }   
                
    }
    console.log(num);
}
odd([1,2,3,4,5,6,7,8,9,])




function arrays(n){
    for(i=0; i<n.length; i++){
        
}   console.log(n[4])
    console.log(n[5])
    console.log(n[6])
    console.log(n[7])
    console.log(n[8])
 
}arrays([1,2,3,4,5,6,7,8,9,])

function isEven(number) {
    if (number % 2 == 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
}
isEven(4); 
isEven(7); 



// //Given a positive integer print the sum of the digits. For eg n = 159, output 15
// function sumOfDigits(n) {
//     let sum = 0;
//     // for(i=0; i<n; i++)
//     while (n > 0) {
//         sum = sum +( n % 10); 
//         n = Math.floor(n / 10);  
//     {
//     console.log(sum)}
// }
// let n = 159;
// sumOfDigits(n)


// // For n = 5, print 5 5 5 5 5, if n = 4 print 4 4 4 4
// function oddt(num){
//     for(i=0; i<num.length; i++){
//         if(num[i]%2!==0){
//             console.log(num[i])
//         }
//     }
// }oddt([1,2,3,4,5,6,7,8])

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34




function fibonacci(n){
    let a=0;
    let b=1;
    let sum=0;
 while(a<n){
        console.log(a)
        sum=a+b
        a=b; 
        b=sum;
    }
}fibonacci(20)

// 1.Write a short program that prints each number from N to 100 on a new lin
// For each multiple of 3, print "Fizz" instead of the number.
// For each multiple of 5, print "Buzz" instead of the number.
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
// for eg if n = 15 then print

function printFizzBuzz(n) {
    for (let i = 1; i <=n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
printFizzBuzz(15);



function printFizzBuzz(n) {
    for (let i = n; i >=1; i--) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
printFizzBuzz(15);

// Problem: Given the lengths of three sides of a triangle (a, b, c), determine the type of triangle:
// Equilateral if all three sides are equal,
// Isosceles if two sides are equal,
// Scalene if all three sides are different.
// Example Input: a = 5, b = 5, c = 8
// Example Output: "Isosceles"

function triangleType(a, b, c) {
    if (a === b && b === c) {                     5===5 && 5===5  
        console.log("Equilateral");
    } else if (a === b || b === c || a === c) {   5===5 || 5===8 || 5===8
        console.log("Isosceles");
    } else {
        console.log("Scalene");                    
    }
}
triangleType(5, 5, 5);  
triangleType(5, 5, 8); 
triangleType(3, 4, 5);




function average(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i]; //num[0] => 2
    }
    let avg = sum/num.length 
    console.log(avg);

}average([2,4,6,8,9]);

function average(num) {
    let sum = 0;
    let count =0;
    for (let i = 0; i < num.length; i++) {
        if (num[i]%2==0){
            sum+=num[i];
            count++;
     }
        avg=sum/count;
    }
    console.log(avg)
}average([2,4,6,8,9]);















