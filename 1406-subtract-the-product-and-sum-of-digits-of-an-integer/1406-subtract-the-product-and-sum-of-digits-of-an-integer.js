var subtractProductAndSum = function(n) {
    let product = 1, sum = 0;

    for (let digit of String(n)) {
        digit = Number(digit);
        product *= digit;
        sum += digit;
    }

    return product - sum;
};