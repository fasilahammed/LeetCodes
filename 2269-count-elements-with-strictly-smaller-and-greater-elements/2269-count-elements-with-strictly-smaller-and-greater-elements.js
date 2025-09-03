/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
    let a = Math.max(...nums)
    let b = Math.min(...nums)
    return nums.filter(x => x > b && x < a).length

};