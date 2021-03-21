function firstMethod(n) {
    var count_logger=0;
     for(let i=1;i<n/2;i++){
       for(let j=1;j<n/2;j++){
         count_logger++;
         if(isTriple(i, j, n-i-j)){
           return [[i, j, (n-i-j)], count_logger];
         }
       }
     } 
     return 'No Pythagorian triple.';
   }

function isTriple(a, b, c){
    return a**2 + b**2 == c**2;
}

function thirdMethod(num){
    var i=0;
    for(let m=1;m<Math.sqrt(num);m++){
        let n = ((num/2)/m) - m;
        i++;
        if(Number.isInteger(n) && m>n){
            let a = m**2 - n**2;
            let b = 2*m*n;
            let c = m**2 + n**2;
            if(a + b + c == num){
                return [[a, b, c], i];
            }            
        }
    }
    return 'No Pythagorian triple.';
}
  
function secondMethod(num){
     var count_logger=0;
     for(let n=1;n<num/2;n++){
       for(let m=n+1;m<num/2;m++){
            count_logger++;
            let a = m**2 - n**2;
            let b = 2*m*n;
            let c = m**2 + n**2;
            if(a+b+c==num){
                return [[a, b, c], count_logger];
            }
        }
    }
    return 'No Pythagorian triple.';
}
   
function compareMethods(n){
    var a = firstMethod(n);
    var b = secondMethod(n);
    var c = thirdMethod(n);
    console.log('function a solution: [' + a[0] + ']');
    console.log('number of iterations: ' + a[1]);
    console.log('function b solution: [' + b[0] + ']');
    console.log('number of iterations: ' + b[1]);
    console.log('function c solution: [' + c[0] + ']');
    console.log('number of iterations: ' + c[1]);
}
   
//compareMethods(1000);

//function a solution: [200,375,425]
//number of iterations: 99,676
//function b solution: [375,200,425]
//number of iterations: 2,001
//function c solution: [375,200,425]
//number of iterations: 20
