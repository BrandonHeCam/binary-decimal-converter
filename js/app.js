/* Components of document section binary-decimal */
const numBinary = document.getElementById("inputNumberBinary");
const btnDecimal = document.getElementById("btnConvertDecimal");
const btnReset = document.getElementById("btnResetResult");
const resultsDecimal = document.getElementById("sectionResultDecimal");

/* Components of document section decimal-binary */
const numDecimal = document.getElementById("inputNumberDecimal");
const btnBinary = document.getElementById("btnConvertBianary");
const resultsBinary = document.getElementById("sectionResultBinary");

//Constants
const base = 2;

/* Varibles for binary to decimal */
let binary;
let power = 0;
let total = 0;
let arrNumberBinary = [];
let arrFinalBinary = [];

/* Varibles for decimal to binary */
let number;
let arrNumberDecimal = [];
let result;
let residue;

/* Function convert number binary to decimal */
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

  //Results
  const lineResult = document.createElement("p");
  lineResult.innerHTML = `<b>Número decimal: ${total}</b>`;
  resultsDecimal.appendChild(lineResult);
}

/* Function convert number decimal to binary */
function convertNumberBinary() {
  // Process
  number = numDecimal.value;
  residue = number % 2;
  arrNumberDecimal.push(residue);
  result = Math.floor(number / 2);
  residue = result % 2;
  arrNumberDecimal.push(residue);
  while (result > 0) {
    result = Math.floor(result / 2);
    residue = result % 2;
    arrNumberDecimal.push(residue);
    console.log(arrNumberDecimal);
  }
  arrNumberDecimal.reverse();
  arrNumberDecimal.shift();
  let arrNumberDecimalString = arrNumberDecimal.toString();
  let resArr = arrNumberDecimalString;

  //Results
  const lineResult = document.createElement("p");
  lineResult.innerHTML = `<b>Número binario: ${resArr.replace(/,/g, "")}</b>`;
  resultsBinary.appendChild(lineResult);
}

function emptyArrFirstFinalBinary(arrayOne, arrayTwo) {
  arrayOne.splice(0);
  arrayTwo.splice(0);
  power = 0;
  total = 0;
}

function emptyArrBinary(array) {
  array.splice(0);
}

function runCovertDecimal() {
  if (arrNumberBinary.length === 0) {
    convertNumberDecimal();
    console.log(arrNumberBinary);
    console.log(arrFinalBinary);
  } else {
    emptyArrFirstFinalBinary(arrNumberBinary, arrFinalBinary);
    convertNumberDecimal();
    console.log(arrNumberBinary);
    console.log(arrFinalBinary);
  }
}

function runConvertBinary() {
  if (arrNumberDecimal.length === 0) {
    convertNumberBinary();
  } else {
    emptyArrBinary(arrNumberDecimal);
    convertNumberBinary();
  }
}

btnDecimal.addEventListener("click", runCovertDecimal);
btnBinary.addEventListener("click", runConvertBinary);
