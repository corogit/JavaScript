// const array = [1,2,3,4,5];

// function forEach(ary) {
//   for(let i =0; i < ary.length; i++) {
//     console.log(ary[i]);
//   }
// }

// forEach(array);


// コールバック関数に書き換え
const array = [1,2,3,4,5];

function forEach(ary, callback) {
  for(let i = 0; i < ary.length; i++) {
    callback(ary[i]);
  }
}

function log(val) {
  console.log(val);
}

forEach(array, log);