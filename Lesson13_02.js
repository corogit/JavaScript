class Student {

  avg(math, english) {
    console.log((math + english) / 2 );
  }
}


var a001 = new Student();
// プロパティー（クラス内に定義された変数のこと）を定義
a001.name = "sato"; 
a001.avg(30, 70);
