var lengthOfLastWord = function(s) {
    let x=s.trim()
    let a=x.split(" ")
    let b=a.slice(-1);
    let c=b.toString()
    return c.length 
}