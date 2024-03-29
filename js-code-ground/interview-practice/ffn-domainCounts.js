/*
You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "5,com.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts) =>
com:                     1345
google.com:              900
stackoverflow.com:       10
overflow.com:            20
yahoo.com:               410
mail.yahoo.com:          60
mobile.sports.yahoo.com: 10
sports.yahoo.com:        50
com.com:                 5
org:                     3
wikipedia.org:           3
en.wikipedia.org:        2
m.wikipedia.org:         1
mobile.sports:           1
sports:                  1
uk:                      1
co.uk:                   1
google.co.uk:            1

n: number of domains in the input
(individual domains and subdomains have a constant upper length)
*/


const counts = [
    "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "20,overflow.com",
    "5,com.com",
    "2,en.wikipedia.org",
    "1,m.wikipedia.org",
    "1,mobile.sports",
    "1,google.co.uk"
];

// counts -- refernece master
// listofmynewdomains- push constructud domains- subdomains - DOMAIN ARRAY
// string of my full string
// split(".") --> array of strings
// arr = ["m","wikipedia","org"];
// m.wikipedia.org->
// arr.for( other than 0 th index )
// {
//   last index- to my domain push it
//   concat() "wikipedia.org"
//   array.reduce((acc,ele)=>{
//     acc[ele] =
//     return acc;

// },{})
// }
// const domainStore = [];
const calculateClicksByDomain = (counts)=>{
    // mydomainClicks = {};
    mydomains = new Map();
    counts.forEach((each)=>{
        // mobile.yahoo.com --> 90
        let eachDomain = each.split(",")[1];
    // console.log(eachDomain,'first split')
        for(let i=0;i<eachDomain.split(".").length;i++){
            // console.log(eachDomain.split("."),eachDomain.split(".").length,'second split')
            // console.log(eachDomain.split(".").slice(i,eachDomain.split(".").length).join("."),'we get keys');
            let keyToinsert = eachDomain.split(".").slice(i,eachDomain.split(".").length).join(".");
            if(!mydomains.has(keyToinsert)){
                // unique entry
                mydomains.set(keyToinsert,each.split(",")[0]*1);
            }
            else
            {
                // matching domians find and some
                mydomains.set(keyToinsert,mydomains.get(keyToinsert)*1+each.split(",")[0]*1);
                // console.log('foundkey',mydomains.get(keyToinsert)*1+each.split(",")[0]*1)
            }
        }



    })

    console.log(Object.fromEntries([...mydomains].sort()));

}
calculateClicksByDomain(counts);