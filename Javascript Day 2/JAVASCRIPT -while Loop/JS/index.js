// This is do while loop

let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;

let whileLoop = "";
let j = 0;
while (j < 10) {
  whileLoop += "<br>The number is " + j;
  j++;
}
document.getElementById("demo2").innerHTML = whileLoop;