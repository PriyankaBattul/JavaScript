console.log("Array of the cubes of the filtered numbers")


var inputarray=[];
var num= prompt(`Please enter a positive number`);

for (var i=1; i<=num; i++){
    inputarray.push(i)

}
console.log(inputarray);
let odd= inputarray.filter(el=>el%2);
console.log(`After Filtered Odd Elements array is => ${odd}`);
let cube=odd.map(el=>el**3);
console.log(`array of the cubes of the filtered numbers is => ${cube}`);
