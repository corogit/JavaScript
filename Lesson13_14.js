// クラス式
var Student = class {
  constructor(name) {
    this.name = name;
  }
  avg(math, english) {
    console.log((math + english) / 2);
  }
};

var a001 = new Student("sato");
a001.avg(80, 70);
console.log(a001.name);

var a002 = new Student("tanaka");
console.log(a002.name);