// conteo de frecuencia de cada caracteres y compararlos 

// anagramas 2 forma
function areAnagrama (word1, word2) {
    if (word1.length != word2.length)
        {
            return false;
        }
        let letterCount = {}

        for (const char of word1) {
            lowerChar = char.toLowerCase();

            letterCount[lowerChar] = (letterCount[lowerChar] || 0) + 1;
            
        }

        for (const char of word2) {
            lowerChar = char.toLowerCase();

            if (!letterCount[lowerChar]){
                return false;
            }
            letterCount[lowerChar]--;
        }
        return true;
}

console.log(areAnagrama('hola', 'olah'));
console.log(areAnagrama('holae', 'aolDah'));