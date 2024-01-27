
var student = {name:"Bob", grade: 6, color:"blue"};
console.log(student);
student.color = "green";
console.log(student);
console.log(student.name);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}