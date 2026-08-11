/*
    Problem-7: Custom sort - descending numbers:
    sortDesending(nums)- sort an array of numbers from largest to smallest, 
    using a comparator callback passed to .sort(). return a NEW array - don't mutate the original nums array.
*/


const sortDesending = (numbers) => {
    // console.log(numbers);
    const numbers2 = [...numbers]
    const sortedNumbers = numbers2.sort((a, b) => {
        // return (a - b); // asending order | largest to smallest
        return (b - a); // desending order | smallest to largest
    })
    return sortedNumbers;
}
const numbers = [1, 10, 2, 25, 3];
// console.log(sortDesending(numbers));
// console.log('original array -> ',numbers);


/*
    Problem-8: Fix the Mutation Bug - Discount Previes:
    previewDiscount(cart) - should return a NEW array showing what each cart item's price WOULD be after a 10% discount, 
    WITHOUT changing the original cart. The buggy version below accidentally mutates the
    original objects because objects/arrays are passed by REFERENCE - writing to item.price inside map() edits the
    very same object the original cart array points to.
*/

// const previewDiscount = (cart) => {
//     return cart.map((item)=> {
//         item.price = item.price - item.price * 0.1;
//         return item;
//     });
// };
const previewDiscount = (cart) => {
    const updatedPrice = cart.map((item) => {
        // console.log(item);
        return {
            // name: item.name,
            // spread:
            ...item,
            price: item.price - (item.price * 0.1),
        };
    });
    return updatedPrice;
};

let cart = [
    {name: "Pen", price: 100},
    {name: "Bag", price: 500},
];
// console.log('Before : ', cart);
console.log("Preview: ", previewDiscount(cart));
console.log('After : ', cart);