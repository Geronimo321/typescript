"use strict";
function reverse(str) {
    if (str === "")
        return "";
    else
        return reverse(str.substring(1)) + str.charAt(0);
}
console.log(reverse("Hello"));
//# sourceMappingURL=reverseString.js.map