// finding if string has unique characters
// program returns
let name = 'naveen';

const uniquecharactors = function(inputstring)
{
    // iparray = inputstring.split('').sort();
    for(let i = 1; i<inputstring.length; i++)
    {
     if(inputstring[i]==inputstring[i+1])
       return false;
    }
return true;

}
console.log(uniquecharactors(name));

//gopi solution



const isUnique = (input) => {
    let found = true;
    let acc = {};
    for(let i=0; i < input.length; i++) {
        if(acc[input[i]] === undefined) {
            acc[input[i]] = 1;
            return  found;
        } else {
            return !found;
        }
    }
};

console.log(isUnique(name));