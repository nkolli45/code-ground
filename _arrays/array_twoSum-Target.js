/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
    {
        for(let j =1; j<nums.length;j++)
        {
            if(nums[i]== target-nums[j])
            {
                return [nums[i],nums[j]];
            }
        }
    }
};
console.log(twoSum([2,2,2,5],6))