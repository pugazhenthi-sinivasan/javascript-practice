
// Write a function findOddNumbers(start, end) that prints all odd numbers between start and end (inclusive) using console.log
//   example findOddNumbers(3, 15) prints 3, 5, 7, 9, 11, 13, 15

function findOddNumbers(start, end) {
      let oddnumbers=[];
      for(let i=start; i<=end; i++){
          if(i%2!==0){
              oddnumbers.push(i);}
          }console.log(oddnumbers.join(', '));
      }
      findOddNumbers(3,15)



      
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



function add (ott){
    let sum=0;
    for(i=0; i<ott.length; i++){
        if(ott[i]%3===0){
        sum+=ott[i]}
    }console.log(sum)
 }add([1,2,3,4,5,6,7,8,9,])





// let going=[100,400,500]
//     sum=0;
//     for(i=0; i<going.length; i++){
//         sum=sum+going[i]
//     }
//     console.log(sum)


//     // Write a function that takes an array of numbers and returns the sum of all its elements using a for loop.

// function number(n){
//     for(i=0; i<n; i++){

//     }
// }number(20)

// num=[2,7,11,15];
// target=9;

// for(i=0;i<num.length;i++){
//     for(j=1;j<num.length;j++){
//         if(target===num[i]+num[j]){
//             console.log(i,j)
//         }
//     }
// }


// let op=[10,20,30]
// sum=0;
// for(i=0; i<op.length; i++)
// {
//     sum=sum+op[i]
// }
// console.log(sum)




// function days(num){
//     if(num<2 && num<2){
//         console.log("tuesday");
        
//     }
//     else if(num<1 && num<1){
//         console.log("monday");
        
//     }
//     else if(num<3 && num<3){
//         console.log('wensday');
        
//     }

//     else {
//         console.log('fail');
//     }
// } days(1)
//   days(2)
//   days(3)
