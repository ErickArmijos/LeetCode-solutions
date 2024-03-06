/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArray = [...nums1, ...nums2];
    let asw, i;
    newArray.sort((a, b) => a - b);

    if (newArray.length % 2 === 0) {
        i = Math.floor(newArray.length / 2);
        asw = (newArray[i - 1] + newArray[i]) / 2;
    } else {
        i = Math.floor(newArray.length / 2);
        asw = newArray[i];
    }

    return asw;
};
