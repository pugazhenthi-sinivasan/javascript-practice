// 9. Let a be a year, write a program to check whether this year is a leap year or not.
// Print "Y" if it's a leap year and "N" if it's a common year.
// The rule for determining a leap year is:
// The year must be divisible by 4.
// However, if the year is also divisible by 100, it is not a leap year unless...
// The year is also divisible by 400, in which case it is a leap year.
// For example:
// The year 2000 was a leap year because it is divisible by 400.
// The year 1900 was not a leap year because it is divisible by 100 but not by 400.
// The year 2020 was a leap year because it is divisible by 4 but not by 100.
// For example:
// Test
// Result
// isLeapYear(2000)
// Y
// isLeapYear(1900)
// N
// isLeapYear(2020)
// Y


function isLeapYear(a){
    if((a%4===0 && a%100!==0) ||(a%400===0)){
        console.log(" Y")
    }
    else{
        console.log("N")
    }
} isLeapYear(2000)
 isLeapYear(1900)
  isLeapYear(2020)