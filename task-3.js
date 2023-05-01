let object = {
  Do: "I",
  JS: "know",
  NodeJs: "and",
};

function convert(object) {
  let obj = {};

  // //way-1
  //     let keys = Object.keys(object);
  //     let values = Object.values(object);
  //   for (let index = 0; index < keys.length; index++) {
  //       obj[values[index]] = keys[index];
  //   }
  //   console.log(obj);

  // //way-2
  // for (const value in object) {
  //   const element = object[value];
  //   obj[element] = value;
  // }
  // console.log(obj);

  // //way-3
  // for (const [key, value] of Object.entries(object)) {
  //   obj[value] = key;
  // }
  // console.log(obj);
}

// console.log(Object.entries(object));

convert(object);
