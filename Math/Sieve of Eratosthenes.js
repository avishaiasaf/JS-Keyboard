function primeSummation(n) {
  
  var indices=[];
  for(let i=0;i<=n;i++){
    indices.push(true);
  }

  for(let p=2;p*p<=n;p++){
    if(indices[p]){
      for(let j=p*p;j<=n;j+=p){
        indices[j]=false;
      }
    }
  }
  var sum=0;
  for(let i=2;i<n;i++){
    if(indices[i]){
      sum+=i;
    }
  }
  return sum;
}

console.log(primeSummation(140759));
