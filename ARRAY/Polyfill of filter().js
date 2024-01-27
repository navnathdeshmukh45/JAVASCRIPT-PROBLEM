// polyfill of filter
const products = [
    { name: 'iPhone', price: 999, inStock: true },
    { name: 'Samsung Galaxy', price: 899, inStock: false },
    { name: 'Google Pixel', price: 799, inStock: true },
];

const availableProducts = products.filter(product => product.inStock);
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = (callback) => {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    };
}

const myAvailableProducts = products.myFilter(product => product.inStock);

console.log(availableProducts); 