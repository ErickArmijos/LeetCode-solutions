/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let charIndexMap = {};  // Mapa para almacenar el índice más reciente de cada carácter

    let maxLength = 0;
    let i = 0;  // Índice de inicio de la ventana

    for (let j = 0; j < n; j++) {
        if (charIndexMap.hasOwnProperty(s[j]) && charIndexMap[s[j]] >= i) {
            // Si el carácter ya está en la ventana actual, actualiza el índice de inicio
            i = charIndexMap[s[j]] + 1;
        }

        // Actualiza el índice más reciente del carácter
        charIndexMap[s[j]] = j;

        // Calcula la longitud actual de la subcadena sin caracteres repetidos
        let currentLength = j - i + 1;

        // Actualiza la longitud máxima si es necesario
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};
