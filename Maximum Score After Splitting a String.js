/**
 * @param {string} s
 * @return {number}
 */



var maxScore = function (s) {
    let c = 0;
    let conBucle=0;
    let sumTotal = 0;
    let sumIzq = 0;
    let sumDer = 0;
    let mayor = 0;
    let i=0;
    while (i<s.length) {
        
    if (i <= c) {
        if (s[i] == '0') {
            sumIzq++;
        }
    } else {
        if (s[i] == '1') {
            sumDer++;
            
        }
    }
        sumTotal = sumIzq + sumDer;
        if (sumTotal > mayor) {
            mayor = sumTotal;
        }
        i++;
        if(i==s.length){
            conBucle++;
            if(conBucle<s.length-1  ){
                i=0;
                sumIzq = 0;
                sumDer = 0;
                sumTotal = 0;
                c++;
            }            
        }
    }
    return mayor
};






