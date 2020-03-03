/**
 * @param {numsber[]} nums
 * @return {numsber}
 */

function removeDuplicates (nums){
    let out = [];
   for(let i=0; i<nums.length; i++) {
        if(i == 0 && out.length === 0){
            console.log( 'called once')
            out.push(nums[i]);
        }
        else {
            for(let j = 0; j< out.length ; j++){
            if(out[j] !== nums[i])
            {
                out.push(nums[i]);
            }
            else
            {
                // continue;
            }
            }
        }
    }
    return JSON.stringify(out);
}
console.log(removeDuplicates([1, 1, 1, 2,2, 3, 3, 3, 4, 4, 4,4]));