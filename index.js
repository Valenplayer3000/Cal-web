var mode = 1; //The mode var
var op = "" ; //The op var 
var num1 = 0; //The number 1
var num2 = 0; //The number 2
var res = 0;  //Result

function myFunction1() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "1";
  num1 = 1;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "1";
  num2 = 1;
  mode = 4;
 }
}
function myFunction2() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "2";
  num1 = 2;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "2";
  num2 = 2;
  mode = 4;
 }
}
function myFunction3() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "3";
  num1 = 3;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "3";
  num2 = 3;
  mode = 4;
 }
}
function myFunction4() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "4";
  num1 = 4;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "4";
  num2 = 4;
  mode = 4;
 }
}
function myFunction5() {
    if (mode == 1){
  document.getElementById("demo1").innerHTML = "5";
  num1 = 5;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "5";
  num2 = 5;
  mode = 4;
 }
}
function myFunction6() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "6";
  num1 = 6;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "6";
  num2 = 6;
  mode = 4;
 }
}
function myFunction7() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "7";
  num1 = 7;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "7";
  num2 = 7;
  mode = 4;
 }
}
function myFunction8() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "8";
  num1 = 8;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "8";
  num2 = 8;
  mode = 4;
 }
}
function myFunction9() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "9";
  num1 = 9;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "9";
  num2 = 9;
  mode = 4;
 }
}
function myFunction0() {
 if (mode == 1){
  document.getElementById("demo1").innerHTML = "0";
  num1 = 0;
  mode = 2;
 } else if (mode == 3){
  document.getElementById("demo1").innerHTML = "0";
  num2 = 0;
  mode = 4;
 }
}
function sum(){
    if (mode == 2){
    op = "+";
    mode = 3;
    document.getElementById("demo1").innerHTML = "+";
    }
    
}
function minus(){
 if (mode == 2){
     op = "-";
     mode = 3;
     document.getElementById("demo1").innerHTML = "-";
 }
}
function multi(){
    if(mode == 2){
        op = "*";
        mode = "3"
        document.getElementById("demo1").innerHTML = "*";
    }
}
function div(){
    if (mode == 2){
        op = "/";
        mode = 3;
        document.getElementById("demo1").innerHTML = "/";
    }
}
function result(){
    //Wirte the result
if (mode == 4){
if (op == "+") {
    //if the operator is "+" wirte the number to result.
 document.getElementById("demo1").innerHTML = num1 + num2 ;
}else if (op == "-"){
    //if the operator is "-" wirte the number to result
 document.getElementById("demo1").innerHTML = num1 - num2 ;
}else if (op == "*"){
    //if the operator is "*" wirte the number to result
 document.getElementById("demo1").innerHTML = num1 * num2 ;
}else if (op == "/"){
    document.getElementById("demo1").innerHTML = num1 / num2;
}

}
}
function  myFunction10(){
    if (mode == 2){
        mode = 1;
        op = "";
    document.getElementById("demo1").innerHTML = "Cleared!";
    delay(2);
    document.getElementById("demo1").innerHTML = "";
    }else if (mode == 3){
        mode = 1;
        op = "";
        document.getElementById("demo1").innerHTML = "Cleared!";
        delay(2);
        document.getElementById("demo1").innerHTML = "";
    }else if (mode == 4){
        mode = 1;
        op = "";
    document.getElementById("demo1").innerHTML = "Cleared!";
    delay(2);
    document.getElementById("demo1").innerHTML = "";
    }else if (mode == 1){
        alert("Error: No number have selected!");
    }
}