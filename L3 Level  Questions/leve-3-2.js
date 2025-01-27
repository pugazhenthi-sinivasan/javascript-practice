// 3.LCM/////////////////////////////////////////////////
function lcm(a,b){
    let min=Math.min(a,b);
    for(i=min; i<=a*b; i++){
        if(a%i==0  &&  b%i==0){
            console.log(i)
            break;
        }
    }
  }lcm(20,20)
