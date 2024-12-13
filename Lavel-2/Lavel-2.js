// 2.Write a program that takes an integer n as input and prints the sum of the first n odd numbers.
// Example:
// Input: n = 3
// Output: 9 (Explanation: 1 + 3 + 5 = 9)
// Input: n = 5
// Output: 9 (Explanation: 1 + 3 + 5 + 7 + 9 = 25) 


function input(n){
    sum=0;
    count=1;
    for(i=0; i<n; i++){
        sum+=count;
        count+=2;
    }
    console.log(sum)
}input(3)
input(5)


function  program(n){
    sum=0;
    // count=1;
    for(i=0;  i<=n*2;  i++){
        if(i%2==1){
            sum+=i
        }
    }
    console.log(sum)
}
program(5)


