"use strict";
function fib(n) {
    if (n < 2)
        return n;
    else
        return fib((n - 1)) + fib((n - 2));
}
console.log(fib(5));
//# sourceMappingURL=Fibonacci.js.map