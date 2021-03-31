const hello = function(name = 'Tom') {
  console.log('hello' + name);
}

hello();

// アロー関数に変更
const hello = (name = 'Tom') => console.log('hello' + name);

const hello = (name, age) => console.log('hello' + name + age);

hello('Code Mafia', 10);


// 配列
const array = [1,2,3,4,5,6];

array.forEach(function(value) {
  console.log(value);
})

// アロー関数に変更
array.forEach(value => console.log(value));
