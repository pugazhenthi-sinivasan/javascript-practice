// Write a program that takes an integer n as input and prints the sum of the first n odd numbers.
// Example:
// Input: n = 3
// Output: 9 (Explanation: 1 + 3 + 5 = 9)
// Input: n = 5
// Output: 9 (Explanation: 1 + 3 + 5 + 7 + 9 = 25)
function printSum(n){
    let sum = 0;
    let currentOdd = 1;

    for (let i = 0; i < n; i++) {
        sum += currentOdd;
        currentOdd += 2;  
    }

    console.log(sum); //output =9
                      //output =3
}	
printSum(3)
printSum(5)


// Find the index of an element in an array. If the element is present print the index, if the element is not present, it will print -1.
// For example:
// Test	Result
// findIndex([10, 20, 30, 40], 30); 
// 2
// findIndex([10, 20, 30, 40], 50);
// -1

function findIndex(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
      console.log(index);
    } else {
      console.log(-1);
    }
  }
  findIndex([10, 20, 30, 40], 30);  // Output: 2
  findIndex([10, 20, 30, 40], 50);  // Output: -1

// Write a function that takes two ranges and prints number in reverse between the two ranges. 
// Please note start > end
// Test Cases:
// Input:
// start = 10, end = 5
// Output:
// 10 9 8 7 6 5
// For example:
// Test	Result
// printReverseBet(10, 5)
// 10 9 8 7 6 5



function printReverseBet( start , end) {
    let outputStr = "";
    for (let i =  start ; i >= end;i--) {
        outputStr += i + " ";
    }
    console.log(outputStr);
}
printReverseBet(10, 5)  // output:10 9 8 7 6 5
