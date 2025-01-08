function removeDuplicates(arr) {
    let uniqueArr = [];

    arr.forEach(e => {
        if(!uniqueArr.includes(e)){
            uniqueArr.push(e)
        }
    })

    return uniqueArr;
}

module.exports = removeDuplicates;
