/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniques = new Set();

    for (const num of nums) {
        if (uniques.has(num)) {
            return true;
        }
        
        uniques.add(num);
    }

    return false;
};
