// This is for loop

const country = [
  "Pakistan",
  "India",
  "Sirilanka",
  "America",
  "Afghanistan",
  "China",
];

let text = "";
for (let i = 0; i < country.length; i++) {
  text += country[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
