function formatPhoneNumber(nums) {
    const part1 = nums.slice(0, 3).join('');
    const part2 = nums.slice(3, 6).join('');
    const part3 = nums.slice(6).join('');

    return `(${part1}) ${part2}-${part3}`;
}

module.exports = formatPhoneNumber;
