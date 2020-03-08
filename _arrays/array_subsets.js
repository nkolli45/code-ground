// couldnt able to solve this problem
// recurisve backtracking approoach or bit masking approach (internet solution)

const input = [1,2,4,5];
const subsets = () => {
     myFinalSubSetArray = [];
    for(let i =0 ;i <input.length;i++)
    {

           myFinalSubSetArray.push(input.slice(i,i+1));

    }

    return myFinalSubSetArray;
};

console.log(subsets());
