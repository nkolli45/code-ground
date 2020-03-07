/**
 * @param {numsber[]} nums
 * @return {numsber}
 */

function removeDuplicates (nums){
    let out = [];
for(let i=0; i<nums.length;i++) {
 out.indexOf(nums[i]) == -1 ? out.push(nums[i]): '';

}
return out.length;


}
console.log(removeDuplicates([1, 1, 1, 2,2, 3, 3, 3, 4, 4, 4,4]));