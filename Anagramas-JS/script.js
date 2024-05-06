// anagramas primera forma de hacerlo
function areAnagrama (word1, word2) {
    let removeSpacesAndToLower = function (str) {
        let result = '';
        for (const element of str) {
            if (element !== ('') ) {
                result += element.toLowerCase();
            }
    }
    return result;
};

let sortString = function (str) {
    return removeSpacesAndToLower(str).split("").sort().join(" ");
}

return sortString(word1) === sortString(word2);
}

console.log(areAnagrama('hola', 'olah'));
console.log(areAnagrama('holae', 'aolDah'));
console.log(areAnagrama('pato', 'aotp'));
