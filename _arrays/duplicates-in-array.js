/**
 * @param {numsber[]} nums sorted arrays with duplicates
 * @return {numsber}
 */

const removeDuplicates = function(nums) {
    let write = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue // loop moves ahead without executing the lines
        // below the if
        nums[write] = nums[i]
        write++
    }
    //nums array still contain all the elements except that the elements of given length will be modified to
    // unique values
    return write, nums;
};
console.log(removeDuplicates([1,1,1,1,2,2,2,2,3,3,3,3]));