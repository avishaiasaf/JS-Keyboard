function smallestMult(n) {
  var series=[];
  for(let i=1;i<=n;i++){
    series.push(i);
  }
  var result=series.reduce(lcm);
  return result;
}

function gcd(a, b){
  if(!a)  return b;
  if(!b)  return a;
  return gcd(Math.min(a, b), Math.max(a, b)%Math.min(a, b))
}

function lcm(a, b){
  return Math.abs(a*b)/gcd(a, b)
}

console.log(smallestMult(5));
console.log(smallestMult(10));
console.log(smallestMult(20));
console.log(smallestMult(40));

//60
//2520
//232792560
//5342931457063200
