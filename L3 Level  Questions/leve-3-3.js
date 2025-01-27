// 4.gcd gcd gcd///////////////////////////////////////////
function gcd(a,b){
    let max=Math.max(a,b);
    for(i=max; i>0; i--){
        if(a%i==0 && b%i==0){
            console.log(i)
            break;
        }
    }
    }gcd(50,10)