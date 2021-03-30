const array = [1,2,3,4,5,6];

// for(let v = 0; v < array.length; v++)
for(let v of array) {
  console.log(v);
}

// 1
// 2
// 3
// 4
// 5
// 6
// for of だと値（配列の中身）がわたる

// i,j,kは添字によく使われるので'for of'の時は使用しない