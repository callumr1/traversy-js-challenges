// Question recommended not using Math.max, so here we are
function findMaxNumber(numbers) {
    let max = numbers[0];

    numbers.forEach(num => {
        if(num > max){
            max = num;
        }
    });

    return max;
}

module.exports = findMaxNumber;
