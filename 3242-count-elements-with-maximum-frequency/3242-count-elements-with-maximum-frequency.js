/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
     let freq = {};
    let maxFreq = 0, sum = 0;

    for (let n of nums) {
        freq[n] = (freq[n] || 0) + 1;

        if (freq[n] > maxFreq) {
            maxFreq = freq[n];
            sum = freq[n];   
        } else if (freq[n] === maxFreq) {
            sum += freq[n];  
        }
    }
    return sum;
    
};