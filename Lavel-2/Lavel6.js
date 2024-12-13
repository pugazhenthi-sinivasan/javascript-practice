// 8.Debug the code. Print the first N even numbers in reverse. 

// n = 5, the program is expected to print 
// For example:
// Test	Result
// printNEvenInReverse(5)
// 10
// 8
// 6
// 4
// 2


function poi(n){
    for(i=n; i>=1;  i--){
        console.log(i*2)
    }
}poi(10)

function printall(c,d){
    for(i=c; i<=d; i+=5 ){
        console.log(i)
    }
    
}printall(10,30);

// print= 10 15 20 25 30