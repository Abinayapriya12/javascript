function isPrime(n){
  for(let i = 2; i < n;i++)
    {
    if(n % i== 0){
    return `${ n } is not a prime number`  
    }
  }
 return `${ n } is a prime number` 
}

console.log(isPrime(13))

var numbers = [1,2,3,4,5,6,7,8,9,10]
function isPrime(num){
    for (let i=2;i<=Math.sqrt(num);i++){
        if(num % i==0)return false
    }
    return true
}
var primes = numbers.filter(isPrime)
console.log(primes)































/* let limit = 20;
let primes = [];

for (let n = 2; n <= limit; n++) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) primes.push(n);
}

console.log(primes); */

