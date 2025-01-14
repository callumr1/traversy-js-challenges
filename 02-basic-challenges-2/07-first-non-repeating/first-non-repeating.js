function findFirstNonRepeatingCharacter(str) {
    let chars = str.split("");

   for(let i = 0; i <= chars.length; i++){
    let occurances = chars.filter(x => x === chars[i]).length;
        if(occurances === 1){
            return chars[i];
        }
   }

   return null;
}

module.exports = findFirstNonRepeatingCharacter;
