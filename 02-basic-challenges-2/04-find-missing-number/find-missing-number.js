function findMissingNumber(nums) {
    if(nums.length > 0){
        let total = nums.length + 1;
        let sum = (total * (total + 1)) / 2;

        let actualSum = 0;
        nums.forEach(num => {
            actualSum += num
        });

        // Missing number should be the diference between the expected sum and the actual sum
        return sum - actualSum
    }
}

module.exports = findMissingNumber;
