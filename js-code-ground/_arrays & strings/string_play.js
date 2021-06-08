var str = 'gadipa';
var final = [];
str = str.split("");
const t=str.length;
for(let i=0;i< t-1; i++){
//final.unshift(teststr[i]);
str.splice(i,0,str[t-1-i]);
str.splice(t-1-i,1,0);
}
console.log(str);
/* console.log(final.join(""));
console.log(final.join("").substr(1)) */