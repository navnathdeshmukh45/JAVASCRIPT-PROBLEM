//  Find the longest word length

const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

const longestWordLength = words.reduce((maxLength, word) => {
    const currentLength = word.length;
    return currentLength > maxLength ? currentLength : maxLength;
}, 0);

console.log(longestWordLength);