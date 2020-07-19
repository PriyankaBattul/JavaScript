console.log("Create a loop that iterates up to 100 while outputting fizz at multiplies of 3, buzz at multiplies s of 3, buzz at multiples of 5 and and fizzbuzz at multiples of 3 and 5")
function fizzbuzz(){

    for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
    console.log(i + "== fizzbuzz");
    else if (i % 3 === 0)
    console.log(i + "== fizz");
    else if (i % 5 === 0)
    console.log(i + "== buzz");
    }

    }

    fizzbuzz();