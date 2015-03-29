
var number = {};

for (n = 0; n <= 100; n++) { 

 if ( n%5 == 0 && n%3 == 0) {
     number[n] = "NZ";
 }    
 else if (n%5 == 0 && n%3 != 0) {
     number[n] = "RO";
 }
 else if (n%3 == 0 && n%5 != 0) {
     number[n] = "BE";
 } else {
     number[n] = n;
 }
    
}
var item = number[Math.floor(Math.random()*number.length)];

console.log(number);
console.log(item);
