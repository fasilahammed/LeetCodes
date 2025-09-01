/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum=0,count =0
    for(let num of nums){
        if(num % 6 ===0){
            sum += num;
            count++
        }
    }
    return count ===0 ?0:Math.floor(sum/count)
};