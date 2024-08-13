const display = document.getElementById("myH1");
const digitBtn = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const calculate = document.querySelector(".calculate");
const clear = document.querySelector(".clear");
let val = "";
let operatorSymbol = "";
let op1 = null;
let isOperatorClicked = false;

digitBtn.forEach(bt => {
    bt.addEventListener("click", () => {
        if (isOperatorClicked) {
            val = ""; 
            isOperatorClicked = false;
        }
        val += bt.textContent;
        display.textContent = val;
    });
});

operator.forEach(op => {
    op.addEventListener("click", () => {
        if (op1 === null) {
            op1 = display.textContent;
            operatorSymbol = op.textContent;
            isOperatorClicked = true;
        } else {
            let op2 = display.textContent;
            let result = operate(Number(op1), Number(op2), operatorSymbol);
            display.textContent = roundTo(result,10);
            op1 = result; 
            operatorSymbol = op.textContent;
            isOperatorClicked = true;
        }
    });
});

calculate.addEventListener("click", () => {
    if (op1 !== null && operatorSymbol !== "") {
        let op2 = display.textContent;
        let result = operate(Number(op1), Number(op2), operatorSymbol);
        display.textContent = roundTo(result,10);
        op1 = null;
        operatorSymbol = "";
        val = result; 
    }
});

function operate(num1, num2, opC) {
    if(num1>1e9 || num2>1e9){
        return NaN;
    }
    switch (opC) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 === 0 ? "Invalid" : num1 / num2;
        default:
            return "Error"; 
    }
}

clear.addEventListener("click", () => {
    display.textContent = "0";
    val = "";
    operatorSymbol = "";
    op1 = null;
    isOperatorClicked = false;
});
function roundTo(num, decimals) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
