/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const max=Math.max(...nums)
    const maxIndex=nums.indexOf(max);
    let bool=true;

    for(let i=0;i<nums.length;i++){
        if(nums[i]==max) continue

        if(max<nums[i]*2) bool=false

    }
    return bool==true? maxIndex : -1

    
};