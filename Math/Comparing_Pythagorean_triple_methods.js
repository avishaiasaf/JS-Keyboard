function firstMethod(n) {
 let sumOfabc = n;
 var count_logger=0;
  for(let i=1;i<n/2;i++){
    for(let j=1;j<n/2;j++){
      count_logger++;
      if(isTriple(i, j, n-i-j)){
        //console.log(count_logger);
        return [i*j*(n-i-j), count_logger];
      }
    }
  } 
 return false;
}

function isTriple(a, b, c){
  return a**2 + b**2 == c**2;
}

function otherMethod(num){
  var count_logger=0;
  for(let n=1;n<num/2;n++){
    for(let m=n+1;m<num/2;m++){
      count_logger++;
      let a = m**2 - n**2;
      let b = 2*m*n;
      let c = m**2 + n**2;
      if(isTriple(a, b, c) && a+b+c==num){
        //console.log(count_logger);
        return [a*b*c, count_logger];
      }
    }
  }
  return false;
}

function compareMethods(n){
  var a = firstMethod(n);
  var b = otherMethod(n);
  console.log('function a solution: ' + a[0]);
  console.log('number of iterations: ' + a[1]);
  console.log('function b solution: ' + b[0]);
  console.log('number of iterations: ' + b[1]);
}

compareMethods(1000);

//function a solution: 31875000
//number of iterations: 99676
//function b solution: 31875000
//number of iterations: 2001
