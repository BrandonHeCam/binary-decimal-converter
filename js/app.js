/* Components of document */
const numBinary = document.getElementById("inputNumberBinary");
const btnDecimal = document.getElementById("btnConvertDecimal");
const btnReset = document.getElementById("btnResetResult");
const results = document.getElementById("sectionResult");

//Constants
const base = 2;

/* Varibles */
let binary;
let power = 0;
let total = 0;
let arrNumberBinary = [];
let arrFinalBinary = [];

/* Functions */
function convertNumberDecimal() {
  // Process
  binary = Array.from(numBinary.value);
  arrNumberBinary = binary.map((str) => Number.parseInt(str));
  arrNumberBinary.reverse();
  for (const numberBinary of arrNumberBinary) {
    arrFinalBinary.push(numberBinary * base ** power);
    power++;
    console.log(arrFinalBinary);
  }
  total = arrFinalBinary.reduce((previus, current) => previus + current, 0);
  console.log(total);

  // Results
  const lineResult = document.createElement("p");
  lineResult.innerHTML = `<b>Número decimal: ${total}</b>`;
  results.appendChild(lineResult);
}

function emptyArray(arrayOne, arrayTwo) {
  arrayOne.splice(0);
  arrayTwo.splice(0);
  power = 0;
  total = 0;
}

function runCovertDecimal() {
  if (arrNumberBinary.length === 0) {
    convertNumberDecimal();
    console.log(arrNumberBinary);
    console.log(arrFinalBinary);
  } else {
    emptyArray(arrNumberBinary, arrFinalBinary);
    convertNumberDecimal();
    console.log(arrNumberBinary);
    console.log(arrFinalBinary);
  }
}

btnDecimal.addEventListener("click", runCovertDecimal);
