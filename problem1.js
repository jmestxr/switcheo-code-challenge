/* Assumption: n is a positive integer */

/* Method 1: loop */
var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

/* Method 2: more efficient looping */
var sum_to_n_b = function(n) {
    if (n === 1) return n;

    let sum = 0;
    const acc = 1 + n;
    const mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
        sum += acc;
    }

    if (n % 2 !== 0) sum += mid + 1

    return sum;
};

/* Method 3: using AP formula */
var sum_to_n_c = function(n) {
    return (n / 2) * (1 + n);
};

console.log(sum_to_n_a(3));
console.log(sum_to_n_b(3));
console.log(sum_to_n_c(3));