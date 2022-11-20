window.onload = function () {
  let starterDiv = document.getElementById("starter-div");
  let firstHeading = document.createElement("h2");

  firstHeading.innerText = "This is an H2 created with JS";
  firstHeading.classList.add("js-header");

  starterDiv.appendChild(firstHeading);

  let secondHeading = document.createElement("h2");
  secondHeading.innerText = "This is another H2 created with JS";
  secondHeading.classList.add("js-header");
  secondHeading.id = "second-h2";

  starterDiv.appendChild(secondHeading);
};

function showName() {
  console.log("showName");

  let name = document.getElementById("name").value;
  document.getElementById("greeting-text").innerText = "Hi " + name;
}

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function resetColor() {
  document.body.style.backgroundColor = "#FCE166";
}

function toggleLightbulb() {
  // start
  let lightbulb = document.getElementById("light");
  lightbulb.classList.toggle("on");
  // end
}
