// // Problem-1: Bulk discount applier
// // applyDiscount(prices, rate) - apply a discount % to every price in the array and return a NEW array.
// // The original prices array must stay exactly the same.

// const applyDiscount = (price, discountRate) => {
//     // console.log(prices, discountRate);

//     const prices = [...price]

//     let newArray = [];

//     for(const price of prices){
//         discount = (price * discountRate / 100)
//         newPrice = price - discount;
//         newArray.push(newPrice)
//         // console.log(arr);
//     }
//     return newArray;

// }
// console.log(applyDiscount([500, 1000, 250], 10));
// Problem-1: Bulk discount applier
// applyDiscount(prices, rate) - apply a discount % to every price in the array and return a NEW array.
// The original prices array must stay exactly the same.


// map diye kori
const applyDiscount = (prices, discountRate) => {
    // console.log(prices, discountRate);

    const newArray = prices.map(price =>{
        // console.log(price);
        discount = price * discountRate / 100;
        // console.log(discount);
        newPrice = price - discount;
        return newPrice;
    })
    return newArray;

}
// console.log(applyDiscount([500, 1000, 250], 10));

// Problem-2: Passing students filter:
// getPassingStudents(students, threshold)- return only the students
// whose marks are greater than or equal to the given threshold.
const getPassingStudents = (students, threshold) => {
    // const passStudents = [];
    // for(const student of students){
    //     // console.log(student);
    //     if(student.marks >= threshold){
    //         passStudents.push(student)
    //     }
    // }

    // use filter method: filter er shomoy true/false return korte hoy
    const passStudents = students.filter((student) => {
        // console.log(student);
        if(student.marks >= threshold){
            return true;
        }
    })
    return passStudents;
}
const students = [
    {name: 'Rafi', marks: 75},
    {name: 'Karim', marks: 40},
    {name: 'Utsho', marks: 60},
];
console.log(getPassingStudents(students, 60));