/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let asw = false;
    let inicValue = x;
    let lNumber = '' + x;
    let j = 0, k = 0;

    for (let i = lNumber.length - 1; i >= 0; i--) {
        j = x % 10;
        k = j * Math.pow(10, i) + k;
        x = Math.floor(x / 10);  // Actualizamos x eliminando el dígito de la derecha.
    }

    if (inicValue == k) {
        asw = true;
    }

    return asw;
};


