//question1

function isFirstElementPrime(arr) {
   
    if (arr.length === 0) {
      console.log("Array is empty.");
      return false;
    }
  
    const firstElement = arr[0];
  
    if (isPrime(firstElement)) {
      console.log(`${firstElement} is a prime number.`);
    } else {
      console.log(`${firstElement} is not a prime number.`);
    }
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  
  const exampleArray = [7, 14, 9,1,11,3, 10];
  isFirstElementPrime(exampleArray);
  

// loop, question no=3
for(i=0;i<=15;i++){
    if(i%2==0){
    console.log(i+"is even") ;
 }else{
     console.log(i+"is odd") ; 
    
 } 
}

  // sum of squares,question no=4
 var array=[1,2,3,4,5];
 var sum=0;
for(var i=0;i<5;i++){
   sum=array[i]*array[i];
   console.log(sum)
}
return sum;

//mostfrequentnumber ,question no2
var array=[1,2,4,2,5,1,2];
obj = {};
var el,
max=0;
for(let i=0;i<array.length;i++){
if(!obj[array[i]]) obj[array[i]] =1;
else obj[array[i]]++;
}
for(const i in obj) {
    if(max <obj[i]){
        max=obj[i];
        el=i;
    }
}
console.log("the most frequent element is:"+el);




