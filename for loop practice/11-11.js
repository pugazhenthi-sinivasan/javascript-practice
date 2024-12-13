


function ok(days){
    for(let i=0;  i<days.length;  i++){

     if(days[i]==1  ||  days[i]==2){
        console.log("srting")
    }
    else{
        console.log("sleeping")
    } }
}ok([1,2,3,4,5,6,7]);



function checkNumber(num) {

    // Enter your code here
    if (num == 10) {
        console.log("The number is Equal to 10");
        
    }
    else if (num < 10) {
        console.log("The number is Less than 10");
    }
    else {
        console.log("The number is Greater than 10");
    }
}
checkNumber(10)
checkNumber(9)
checkNumber(12)