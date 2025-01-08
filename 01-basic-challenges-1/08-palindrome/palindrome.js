function isPalindrome(input) {
    let phrase = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversePhrase = phrase.split("").reverse().join("")

    return phrase === reversePhrase;
}

module.exports = isPalindrome;
