const obj = {
  name: "User",
  age: 25,
  city: "Ahmedabad",
};
let arr = [];

// // way-1
// for (const key in obj) {
//     const element = [key, obj[key]]
//     arr.push(element);
// }
// console.log(arr);

// // way-2
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// for (let index = 0; index < keys.length; index++) {
//  let element = [keys[index], values[index]];
//  arr.push(element);
// }
// console.log(arr);

// // way-3
// const keys = Object.keys(obj);
// keys.forEach(key => {
//    const element = [key, obj[key]];
//    arr.push(element);
// });
// console.log(arr);
