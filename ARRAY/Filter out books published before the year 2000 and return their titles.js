//  Filter out books published before the year 2000 and return their titles
const books = [
    { title: 'Book 1', year: 1998 },
    { title: 'Book 2', year: 2003 },
    { title: 'Book 3', year: 1995 },
    { title: 'Book 4', year: 2001 },
];
const  filterbook = books
.filter(book => book.year >= 2000)
.map(book => book.title);
console.log(filterbook);