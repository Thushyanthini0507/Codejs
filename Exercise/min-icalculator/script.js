
function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1+num2;
    document.getElementById("result").value = result;   
};


function sub() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1-num2;
    document.getElementById("result").value = result;   

};


function mul() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1*num2;
    document.getElementById("result").value = result;   
};


function div() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1/num2;
    document.getElementById("result").value = result;   
};


function clearfile() {
   document.getElementById("num1").value=" ";
   document.getElementById("num2").value=" ";
   document.getElementById("result").value=" ";
};

