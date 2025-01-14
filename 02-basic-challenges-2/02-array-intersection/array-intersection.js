function arrayIntersection(arr1, arr2) {
    let set = new Set(arr1)
    const intersection = [];

    for(let num of arr2){
        if(set.has(num)){
            intersection.push(num);
        }
    }

    return intersection;
}

module.exports = arrayIntersection;
