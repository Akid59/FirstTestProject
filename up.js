var count = 0;
var quiz = [
let count = 0;
let quiz = [
  {
    question: "犬は英語でなんと言うでしょう",
    answer: "dog"
  },
  {
    question: "鳥は英語でなんと言うでしょう",
    answer: "bird"
  },
  {
    question: "クジラは英語でなんと言うでしょう",
    answer: "whale"
  },
  {
    question: "図書館は英語でなんと言うでしょう",
    answer: "library"
  },
];

for (var i = 0; i < quiz.length; i++) {
  var your_answer = prompt(quiz[i].question);
  let your_answer = prompt(quiz[i].question);
  if(your_answer == quiz[i].answer) {
  alert("正解!");
  count++;
  }else {
  alert("はずれ!");
  }
}

document.write(quiz.length + "問中"　+　count + "問正解でした！");
