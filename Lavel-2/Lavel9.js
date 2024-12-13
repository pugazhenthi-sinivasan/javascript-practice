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
