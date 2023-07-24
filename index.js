
// Q.1....


let s1= "abcadeecfb";
    let arr1=s1.split("");
    let arr2=new Set(arr1);
    let ans=[...arr2];
    let s2=ans.join("");
    console.log(s2);


// Q.2

let str1=`abcadeecfb`;
function count(str) {
    const charCountMap = new Map();
    for (let char of str) {
    if (charCountMap.has(char)) {
    charCountMap.set(char, charCountMap.get(char) + 1);
    } else {
    charCountMap.set(char, 1);
    }
    }
    for (let [char, count] of charCountMap) {
    console.log(`${char}=${count}`);
    }
    }
 count(str1);