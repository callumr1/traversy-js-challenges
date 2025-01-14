function findMissingLetter(arr) {
    const alphabet="abcdefghijklmnopqrstuvwxyz";

    // handle upper case letters
    let start = alphabet.indexOf(arr[0].toLowerCase());

    for(let i = 0; i <= arr.length; i++){
        let char = arr[i];
        if(char.toLowerCase() !== alphabet[start+i]){
            // found the missing letter
            if(char === char.toUpperCase()){
                return alphabet[start+i].toUpperCase();
            } else {
                return alphabet[start+i];
            }
        }
    }

    // no missing letter found, return empty string
    return "";
}

module.exports = findMissingLetter;
