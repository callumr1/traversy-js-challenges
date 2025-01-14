function areAllCharactersUnique(str) {
    let chars = str.split("");
    let set = new Set(chars);

    if(chars.length === 0) {
        return true;
    }
    if(set.size == chars.length) {
        return true;
    } else {
        return false;
    }
}

module.exports = areAllCharactersUnique;
