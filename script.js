function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}


function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    let n = Number(num);
    let val = n.toLocaleString("en");
    return val;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ""));
}


let operator = document.getElementsByClassName("operator");

console.log(operator);