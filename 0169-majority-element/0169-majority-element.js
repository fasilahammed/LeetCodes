/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let sum=0,count=0
    for(let num of nums){
        if(count ===0){
            sum=num

        }
        count += (num === sum)?1:-1
    }
    return sum
};