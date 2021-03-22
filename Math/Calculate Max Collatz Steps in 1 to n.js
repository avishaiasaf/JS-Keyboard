var steps=new Array();

function calculateCollatz(n){
    var prev = n;
    var arr=[];
    while(n>1){
        arr.push(n);
        if(steps[n])  return [arr.length + steps[n], arr, prev];
        else if(n%2==0 && steps[n/2]) return [arr.length + steps[n/2], arr, prev];
        if(n%2==0)   n/=2;
        else n = n*3 + 1;       
    }
    steps[prev] = arr.length;
    return [arr.length, arr, prev];
}

function runCollatzCalculation(n){
    var max = 0;
    var max_index = 0;
    var max_complex = 0;
    for(let i=1;i<n;i++){
        let temp = calculateCollatz(i);
        steps[i]=temp[0];
        if(temp[0]>max){
            max = temp[0];
            max_index = i;
        } 
        if(temp[1].length>max_complex) max_complex = temp[1].length;
        //console.log('n: ' + i + ' steps: ' + temp[0] + ' complexity: ' + temp[1].length);
    }
    console.log('Max Steps in range: ' + max + ' for n= ' + max_index);
    console.log('Max Complexity in range: ' + max_complex);
}

//runCollatzCalculation(1000);

//Max Steps in range: 524 for n= 837,799
//Max Complexity in range: 287
