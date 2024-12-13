
// 5.Write a function that takes two ranges and prints number in reverse between the two ranges. 
// Please note start > end
// Test Cases:
// Input:
// start = 10, end = 5
// Output:
// 10 9 8 7 6 5

function sumth(start, end){
    outputStr="";
    for(i=start; i>end;  i--){
        outputStr += i + " ";
    }
    console.log(outputStr)
}sumth(10,5)