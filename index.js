let calculatorContainer = document.querySelector(".calculator");
let input = document.querySelector(".input");

let formulaTrackerArray = [];
calculatorContainer.addEventListener("click", (e) => {
  if (e.target.innerText === "/") {
    formulaTrackerArray.push(parseInt(input.innerText));
    formulaTrackerArray.push("/");
    input.innerText = "";
  } else if (e.target.innerText === "*") {
    formulaTrackerArray.push(parseInt(input.innerText));
    formulaTrackerArray.push("*");
    input.innerText = "";
  } else if (e.target.innerText === "+") {
    formulaTrackerArray.push(parseInt(input.innerText));
    formulaTrackerArray.push("+");
    input.innerText = "";
  } else if (e.target.innerText === "-") {
    formulaTrackerArray.push(parseInt(input.innerText));
    formulaTrackerArray.push("-");
    input.innerText = "";
  } else if (e.target.innerText === "=") {
    formulaTrackerArray.push(input.innerText);
    let joiningAllValues = formulaTrackerArray.join(" ");
    input.innerText = eval(joiningAllValues);
  } else if (e.target.innerText === "C") {
    input.innerText = "0";
    formulaTrackerArray = [];
  } else if (e.target.innerText === "0" && input.innerText === "0") {
    input.innerText = "0";
  } else if (e.target.innerText === "Bck") {
    let goBackOne = input.innerText
      .toString()
      .slice(0, input.innerText.length - 1);
    input.innerText = goBackOne;
    if (input.innerText.length === 0) {
      input.innerText = 0
    }
  } else {
    if (input.innerText[0] === "0") {
      input.innerText = e.target.innerText;
    } else {
      input.innerText = input.innerText + e.target.innerText;
    }
  }
  console.log(formulaTrackerArray);
});

let calcValues = [
  "C",
  "Bck",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "/",
  "*",
  "+",
  "-",
  "=",
];

for (let i = 0; i < calcValues.length; i++) {
  let button = document.createElement("button");
  button.innerText = calcValues[i];
  button.setAttribute("id", `CalcValue-${calcValues[i]}`);
  calculatorContainer.append(button);
}
