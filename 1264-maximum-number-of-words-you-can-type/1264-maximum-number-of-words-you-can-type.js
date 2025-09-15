/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count = 0;
    let words = text.split(" ");

    for (let word of words) {
        let canType = true;
        for (let ch of brokenLetters) {
            if (word.includes(ch)) {
                canType = false;
            }
        }
        if (canType) count++;
    }
    return count;
};