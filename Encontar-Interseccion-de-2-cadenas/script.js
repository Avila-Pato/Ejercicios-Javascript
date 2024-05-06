// Identificando caractares entre Ambos osea cual letra tienen en comun

function intersectionString (str1, str2) {
    let intersection = '';
    const seenChars = {};

    for (const element of str1 ) {
        const char = element;

        if (str2.includes(char) && !seenChars[char]) {
            intersection += char;
            seenChars[char] = true;
    
    }
}
return intersection;
}

console.log(intersectionString('maicol', 'patricio'));
