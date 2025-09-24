/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let set= new Set(allowed);
    let count=0;
    for(let word of words){
        let istrue=true;
        for(let chr of word)
        {
            if(!set.has(chr))
            {
                istrue=false
            }
        }
        if(istrue)count++
    }
    return count
};