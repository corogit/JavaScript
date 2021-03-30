const array = [1,2,3,4,5,6];

// for(let i = 0; i < array.length; i++)
for(let i in array) {
  console.log(i);
}

// 0
// 1
// 2
// 3
// 4
// 5
// for in だと添字（配列の中身に振り分けられた番号）がわたる