/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
     let a=Math.floor(n/2)
     let b=n-a
     function hasZero(num) {
        return num.toString().includes('0');
    }
    while (hasZero(a) || hasZero(b)) {
        a--;
        b = n - a;
    }
    return [a,b]
     
     
};