function titleCase(string) {
    let phrases = string.toLowerCase().split(" ");

    let capitalised = phrases.map(phrase => {
        let arr = phrase.split("");
        arr[0] = arr[0].toUpperCase();
        return arr.join("");
    })

    return capitalised.join(" ");
}

module.exports = titleCase;
