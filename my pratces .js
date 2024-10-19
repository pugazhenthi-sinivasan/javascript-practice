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
let arra=[]
for(i=0; i<100; i++){
      arra.push(i)
}
console.log(arra)





let op=[]
for(i=0; i<=20; i+=2){
      op.push(i)
}console.log(op)

function add(a,b)
{
      return a+b;
}
console.log(add(20,30))
console.log(add(10,10))


// Write a function that takes an array of integers as input and calculates the sum of all even numbers in the array and prints it
// Test Cases:
// Input: [1, 2, 3, 4, 5, 6]
// Output: 12
// (Explanation: 2 + 4 + 6 = 12)

function primenumber(star,end){
      let odd=[];
      for(let i=star; i<=end; i++){
       if(i%2!==0){
            odd.push(i);
       }
    }
    console.log(odd);
  }
  primenumber(3,15);


//   Write a function that takes an array of integers as input and calculates the sum of all even numbers in the array and prints it
//   Test Cases:
//   Input: [1, 2, 3, 4, 5, 6]
//   Output: 12
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
  addenvennumbers([7,11,18,21,22]);


