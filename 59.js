const todos = [
  {
    id: 1,
    title: 'Go to school',
    completed: true
  },
  {
    id: 2,
    title: 'Go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go shopping',
    completed: true
  }
]

for(let i in todos) {
console.log(i, todos[i].title);
}