// 1.Tara and Jyoti were given one number each. She has to find whether the sum of the two numbers is divisible by 7 or not . If yes then print 1 else print 0. 
// For example:
// Test	Result
// isSumDivisibleBy7(7, 3)
// 0
// isSumDivisibleBy7(31, 4)
// 1

function finde(a,b){
    sum=a+b;
    if(sum%7==0){
        console.log("0")
    }
    else{
        console.log("1")
    }

}finde(7,3);
finde(31,4)
