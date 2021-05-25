//ผูกปุ่มกับฟังก์ชัน
document.getElementById("clear").addEventListener("click",clearDisp);
document.getElementById("dot").addEventListener("click",addDot);
document.getElementById("eval").addEventListener("click",calculate);
let all_num = document.getElementsByClassName("num")
for ( let i=0 ; i<all_num.length ; i++) {
 all_num[i].addEventListener("click",function() {addDigit(this);});
}
let all_ops = document.getElementsByClassName("ops")
for ( let i=0 ; i<all_ops.length ; i++) {
 all_ops[i].addEventListener("click",function() {operate(this);});
}
