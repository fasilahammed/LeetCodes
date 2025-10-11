var firstMissingPositive = function(nums) {
let traker =1;
    let sorted =nums.sort((a, b) => a - b)
    for(let i=0;i<=nums.length-1;i++){
        if(sorted[i] ==traker ){
            traker++
        }
    }
     return traker
};