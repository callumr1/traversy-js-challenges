function fizzBuzzArray(num) {
    let array = [];

    // The minumum number that can be passed in is 1
    if(num >= 1){
        for(let i = 1; i <= num; i++){
            if (i % 3 === 0 && i % 5 === 0){
                array.push("FizzBuzz");
            }
            else if(i % 3 === 0){
                array.push("Fizz");
            }
            else if (i % 5 === 0){
                array.push("Buzz");
            }
            else{
                array.push(i);
            }
        }
    } 

    return array;
}

module.exports = fizzBuzzArray;
