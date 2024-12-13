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
