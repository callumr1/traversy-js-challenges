function countOccurrences(phrase, char) {
    let array = phrase.split("");

    return array.reduce((count, val) => (val === char ? count + 1 : count), 0);
}

module.exports = countOccurrences;
