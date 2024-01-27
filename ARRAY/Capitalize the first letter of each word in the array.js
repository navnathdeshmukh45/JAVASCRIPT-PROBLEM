// Capitalize the first letter of each word in the array
function capitalFirstletter(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}
const inputarray = ['hello world', 'i am openai', 'welcome to javascript'];
const capitalarray = inputarray.map(capitalFirstletter);
console.log(capitalarray);