// Problem-3: User Lookup by ID:
// findUserById(users, id) - find and return the single user object
// whose id matches. if no user matches, returns "User not found".
const findUserById = (users, id) => {
    // const matchesUserId = users.find((user) => {
    //     // console.log(user);
    //     if(user.id === id){
    //         return id
    //     }
    // })
    const matchesUserId = users.find((user) => user.id === id);
    // console.log(matchesUserId);
    if(!matchesUserId){
        return "User not found"
    }
    return matchesUserId;
    // return matchesUserId || "User Not Found";
}
const users = [
    {id: 1, name: "Rafi"},
    {id: 2, name: "Karim"},
    {id: 3, name: "Utsho"},
];
// console.log(findUserById(users, 2));

// Problem-4: Shopping Cart Total (reduce)
// getCartTotal(cart) - sum price * quantity across every item in the cart using reduce().

const getCartTotal = (carts)=> {
    // console.log(carts);
    // let totalPrice = 0;
    // for(const cart of carts){
    //     // console.log(cart);
    //     totalPrice = totalPrice + (cart.price * cart.quty)
    // }

    // reduce mehtod: 
    const totalPrice = carts.reduce((accumulator, currentValue)=> accumulator + (currentValue.price * currentValue.quty),0)
    return totalPrice;
};

const cart = [
    {name: 'Pen', price: 20, quty: 3},
    {name: 'Notebook', price: 50, quty: 2},
    // {name: 'Pen', price: 20, quty: 3},
];
console.log(getCartTotal(cart));