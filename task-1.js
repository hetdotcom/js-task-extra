// const arr = [["Apple"], ["Sweet"], ["Book"], ["Self-Help"], ["Bus"], ["Trip"]]
let obj = {};

// // way-1
// for (let index = 0; index < arr.length; index++) {
//     obj[index] = arr[index];    
// }
// console.log(obj);   

// // way-2
// for (const key in arr) {
//     obj[key] = arr[key];
// }
// console.log(obj);   

// // way-3
// let key = 0;
// for (const iterator of arr) {
//     obj[key] = iterator;
//     key++;
// }
// console.log(obj);   

////////////////////////////////////////////////////////////////////////////

// const arr = [
//   ["Apple", "Sweet"],
//   ["Book", "Self-Help"],
//   ["Bus", "Trip"],
// ];

// // way-1
// for (let index = 0; index < arr.length; index++) {
//     obj[arr[index][0]] = arr[index][1];
// }
// console.log(obj);  

// // way-2
// for (const element of arr) {
//     obj[element[0]] = element[1];
// }
// console.log(obj);  

// // way-3
// for (const key in arr) {
// obj[arr[key][0]] = arr[key][1];
// }
// console.log(obj);  