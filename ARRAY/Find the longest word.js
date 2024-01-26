// Find the longest word
const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

const longestWord = words.reduce((longestWord, word) => {
    return word.length > longestWord.length ? word : longestWord;
}, "");

console.log(longestWord);