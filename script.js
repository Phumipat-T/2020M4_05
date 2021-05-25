let stored = "0";
let current = "0";
let operation = 0 ;
let MaxLength = 10 ;

//ปุ่มตัวเลข
function addDigit(dig_obj) {
    dig = dig_obj.value;
    if (current.length > MaxLength) {
    current = "Too long"; 
    } else if (eval(current) == 0 && current.indexOf(".") == -1){
    current = dig;
    } else {
    current = current + dig;
    }
    document.getElementById("display").innerHTML=current; 
}

//ปุ่มทศนิยม
function addDot() {
    if ( current.length == 0) {
    current = "0."; 
    } else if ( current.indexOf(".") == -1) {
    current = current + ".";
    }
    document.getElementById("display").innerHTML=current; 
}

//ปุ่ม clear
function clearDisp() { 
    stored = "0"; 
    current = "0";
    document.getElementById("display").innerHTML=current; 
}

//ปุ่ม + - * /
function operate(op_obj) {
    op = op_obj.value;
    if (op.indexOf("+") > -1) { operation = 1; } 
    if (op.indexOf("-") > -1) { operation = 2; } 
    if (op.indexOf("*") > -1) { operation = 3; } 
    if (op.indexOf("/") > -1) { operation = 4; } 
    stored = current; 
    current = ""; 
}

//ปุ่ม =
function calculate() { 
    tmp = current;
    if (operation == 1) { current = eval(stored) + eval(current); };
    if (operation == 2) { current = eval(stored) - eval(current); };
    if (operation == 3) { current = eval(stored) * eval(current); };
    if (operation == 4) { current = eval(stored) / eval(current); };
    if (current.toString().length > MaxLength) {
    current = "Too long"; 
    } 
    document.getElementById("display").innerHTML=current; 
    stored = current; 
} 
