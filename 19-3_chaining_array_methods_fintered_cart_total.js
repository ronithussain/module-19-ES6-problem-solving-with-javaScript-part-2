// Problem-5: Filtered Cart Total (chaining filter -> map ->reduce)
// getExpensiveItemsTotal (cart, minPrice) = from the cart ,
// keep only items priced at or above minPrice,
// then calculate the total cost (price * qty) of just those items - all in one chained expression.

// const getExpensiveItemsTotal = (carts, minPrice) => {
//     // console.log(carts, minPrice);
//     const getexpensiveProductPrice = carts.filter((cart) =>cart.price >= minPrice);
//     // console.log(getexpensiveProductPrice);

//     const modifiedProductPrice = getexpensiveProductPrice.map((element) => element.price * element.qty)
//     // console.log(modifiedProductPrice);

//     const getexpensiveTotalProductPrice = modifiedProductPrice.reduce((accumulator, currentValue) => accumulator + currentValue,0)
//     return getexpensiveTotalProductPrice;
// }

// const cart = [
//     {name: "Pen", price: 20, qty: 3},
//     {name: "Headphone", price: 800, qty: 1},
//     {name: "Notebook", price: 50, qty: 2},
//     {name: "Watch", price: 1500, qty: 2},
// ]
// console.log(getExpensiveItemsTotal(cart, 500));

// Chaining:
const getExpensiveItemsTotal = (carts, minPrice) => {
  // console.log(carts, minPrice);
  const getexpensiveProductPrice = carts
    .filter((cart) => cart.price >= minPrice)
    .map((element) => element.price * element.qty)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // console.log(getexpensiveProductPrice);

  return getexpensiveProductPrice;
};

const cart = [
  { name: "Pen", price: 20, qty: 3 },
  { name: "Headphone", price: 800, qty: 1 },
  { name: "Notebook", price: 50, qty: 2 },
  { name: "Watch", price: 1500, qty: 2 },
];
console.log(getExpensiveItemsTotal(cart, 500));
