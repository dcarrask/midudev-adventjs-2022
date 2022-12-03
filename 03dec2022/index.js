// SOLUTION #1
// 171 points # function to get length
// getStringLength = (elems) => {
//   length = 0;
//   elems.map(elem => elem.length).map(elem => { length+= elem });
//   return length;
// }

// distributeGifts = (packOfGifts, reindeers) => {
//   return Math.floor(getStringLength(reindeers) * 2 / getStringLength(packOfGifts));
// }



// SOLUTION #2
// 129 points # using reducer with function
// function distributeGifts(packOfGifts, reindeers) {
//   const reducer = (accumulator, elem) => accumulator += elem.length;
//   const a = reindeers.reduce(reducer,0);
//   const b = packOfGifts.reduce(reducer,0);
//   return Math.floor(a * 2 / b);
// }



// SOLUTION #3
// 148 points # using reducer with function without using variables for weight
// function distributeGifts(packOfGifts, reindeers) {
//   const reducer = (accumulator, elem) => accumulator += elem.length;
//   return Math.floor(reindeers.reduce(reducer,0) * 2 / packOfGifts.reduce(reducer,0));
// }



// SOLUTION #4
// 198 points # using reducer with function without using variables for weight
/*
distributeGifts = (packOfGifts, reindeers) => {
  const reducer = (accumulator, elem) => accumulator += elem.length;
  const a = reindeers.reduce(reducer,0);
  const b = packOfGifts.reduce(reducer,0);

  return Math.floor(a * 2 / b);
}
*/



// SOLUTION #5
distributeGifts = (packOfGifts, reindeers) => Math.floor(reindeers.join("").length * 2 / packOfGifts.join("").length)



// SOLUTION #6
// 188 points # using reducer as arrow function
// distributeGifts = (packOfGifts, reindeers) => {
//   const reducer = (accumulator, elem) => accumulator += elem.length;
//   return Math.floor(reindeers.reduce(reducer,0) * 2 / packOfGifts.reduce(reducer,0));
// }




// const packOfGifts = ["book", "doll", "ball"]
// const reindeers = ["dasher", "dancer"]
// const packOfGifts = ['a', 'b', 'c']
// const reindeers = ['d', 'e']
// const packOfGifts = ['game', 'videoconsole', 'computer']
// const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']

// let output = distributeGifts(packOfGifts, reindeers);

// console.log(`output: ${output}`);