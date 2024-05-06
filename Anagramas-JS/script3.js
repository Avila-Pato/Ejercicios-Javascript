const hasMap = (string) => {
    let mappedObj = {};
    for (let i of string) {
        if(mappedObj[i] === undefined) mappedObj[i] = 1;
        else mappedObj[i]++;
     }
     return mappedObj;
}

const checkAnagram = (string1, string2) => {

    if (string1.length !== string2.length) return false;

    let mappedObj1 = hasMap(string1);
    let mappedObj2 = hasMap(string2);

    for (let key in mappedObj1) {
        if (mappedObj1[key]!== mappedObj2[key]) return false;
    }
    return true;
}

console.log(checkAnagram('hola', 'olah'));
console.log(checkAnagram('holae', 'aolDah'));