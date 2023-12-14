// let x = document.getElementById("x-axis").addEventListener("change", (e) => {
//   return console.log(e.target.value);
// });

// let y = document.getElementById("y-axis").addEventListener("change", (e) => {
//   return console.log(e.target.value);
// });

// let blur = document.getElementById("blur").addEventListener("change", (e) => {
//   return console.log(e.target.value);
// });
// let color = document.getElementById("color").addEventListener("change", (e) => {
//   return console.log(e.target.value);
// });
// document.getElementById(
//   "output"
// ).style.cssText = `text-shadow:${x} ${y} ${blur} ${color}`;

let x = document.getElementById("x-axis").value;
let y = document.getElementById("y-axis").value;
let blur = document.getElementById("blur").value;
let color = document.getElementById("color").value;

document.getElementById("x-axis").addEventListener("input", (e) => {
  x = e.target.value;
  document.getElementById(
    "output"
  ).style.textShadow = `${x}px ${y}px ${blur}px ${color}`;
});

document.getElementById("y-axis").addEventListener("input", (e) => {
  y = e.target.value;
  document.getElementById(
    "output"
  ).style.textShadow = `${x}px ${y}px ${blur}px ${color}`;
});

document.getElementById("blur").addEventListener("input", (e) => {
  blur = e.target.value;
  document.getElementById(
    "output"
  ).style.textShadow = `${x}px ${y}px ${blur}px ${color}`;
});

document.getElementById("color").addEventListener("input", (e) => {
  color = e.target.value;
  document.getElementById(
    "output"
  ).style.textShadow = `${x}px ${y}px ${blur}px ${color}`;
});

document.body.addEventListener("input", () => {
  document.getElementById(
    "code"
  ).innerHTML = `<p>text-shadow:</p> ${x}px ${y}px ${blur}px ${color};`;
});
