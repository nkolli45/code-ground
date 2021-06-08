// S is a string whose only characters are A or B or C or D.
//The following transformations are allowed:
// Deleting a two character substring of any of the forms (BA, AB, CD, DC)
// The problem is to write a function which  returns a string which
// can be constructed from some such
// deletions and from which no more deletions are possible
// const str = 'ABCDCDABCDAC';
// const substrDelete = function(inputstr){
// let noSubStr = false;
// let ip = inputstr;
// while(ip.search('BA') ||  ip.search('AB') || ip.search('CD') || ip.search('DC') == 1)
// {
//     ip.replace('BA','');
//     ip.replace('AB','');
//     ip.replace('CD','');
//     ip.replace('DC','');
//     // substrDelete(ip);
// }
// return ip;
// }
// console.log(substrDelete(str));

 const testmyFunction = function(what){
    return 'myname'+ what;
}

export {testmyFunction};