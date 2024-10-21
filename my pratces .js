// [
//       0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
//      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//      24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//      36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//      48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//      60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//      72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//      84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//      96, 97, 98, 99
//    ]
// let arra=[]
// for(i=0; i<100; i++){
//       arra.push(i)
// }
// console.log(arra)





// let op=[]
// for(i=0; i<=20; i++){
//       op.push(i)
// }console.log(op)

// function add(a,b)
// {
//       return a+b;
// }
// console.log(add(20,30))
// console.log(add(10,10))

// Write a function that takes an array of integers as input and calculates the sum of all even numbers in the array and prints it
// Test Cases:
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12
// (Explanation: 2 + 4 + 6 = 12)
function addenvennumbers(array){
      let sum=0;
      for(i=0;i<array.length;i++){
          if(array[i]%2===0){
          sum+=array[i];
          }
      }
      console.log(sum);
  }
  addenvennumbers([1,2,3,4,5,6]);
  
  
//   Write a function findOddNumbers(start, end) that prints all odd numbers between start and end (inclusive) using console.log
//   example findOddNumbers(3, 15) prints 3, 5, 7, 9, 11, 13, 15

function findOddNumbers(start, end) {
      let oddnumbers=[];
      for(let i=start; i<=end; i++){
          if(i%2!==0){
              oddnumbers.push(i);}
          }console.log(oddnumbers.join(', '));
      }
      findOddNumbers(3,15)



     function add (ott){
        let sum=0;
        for(i=0; i<ott.length; i++){
            if(ott[i]%3===0){
            sum+=ott[i]}
        }console.log(sum)
     }add([1,2,3,4,5,6,7,8,9,])


     function days(num){
        if(num<2 && num<2){
            console.log("tuesday");
            
        }
        else if(num<1 && num<1){
            console.log("monday");
            
        }
        else if(num<3 && num<3){
            console.log('wensday');
            
        }
 
        else {
            console.log('fail');
        }
    } days(1)
      days(2)
      days(3)



let a=10;
let b=5;
let sum=a+b;
console.log("the sum is"+ sum);


let side=5;
let area=side*side;
console.log("the is area"+area)

pruchaserAmount=2000;
if(pruchaserAmount>=2000)
{
console.log("this corret")   
}
console.log("thaks for sir")

let length=10;
let breadth=4;
let area=length*breadth;
console.log("area of rectang ="+area)


let atmAmount=10000;
let atmCash  =5000;
if(atmCash<=atmAmount){
    console.log("this a corrt")
}

