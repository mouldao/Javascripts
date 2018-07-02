//
//
//console.log("Webpage is linked!");
//
//var nameOfVariable;
//
//nameOfVariable = "Hello"; //declaring our variable
//// the datatype is assigning
//
//var test = "Hello";
//console.log(test);
//
///*
//Datatypes
//number
//boolean
//stirng
//undefined
//object
//null
//*/
//var name = prompt("What is your name","Adam");
//function nameOfFunction() {
//console.log("played function");
//}
//nameOfFunction();
//
//alert("listen-up bro");
//
//function addFunction() {
//console.log(9+1+1);
//}
//addFunction();
//function add2Function() {
//    var x = 6+5;
//    console.log(x);
//}
//add2Function();
//function add3Function() {
//    var x = 5;
//    var y = 4;
//
//    console.log(x+y);
//}
//add3Function();
//
//
//function add4Function(x,y) {
//
//    console.log(x+y);
//}
//add4Function(2,5);
//add4Function(3,2);
//add4Function(parseInt(prompt("add x")),parseInt(prompt("add y")));

var _eventListener = document.getElementById("userButton").addEventListener('click',addSums);

function addSums(){
    console.log("function is working")
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
     var  CalculatedNumbers = ((a+b+c)*c)- (a+b+c);
    document.getElementById("displayResult").innerHTML  = CalculatedNumbers;
    alert("a:"+ a + " b:" + b + " c:"+c);
}


var _eventListener2 = document.getElementById("userButton2").addEventListener('click',addFunction);


function addFunction() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
   document.getElementById("displayResult2").innerHTML  =  a+b+c;

}

var _eventListener3 = document.getElementById("userButton3").addEventListener('click',function3);


  var x = 5;
function function3() {
    var x = 5;
 document.getElementById("displayResult3").innerHTML  = x;
  function  functionx()  {
          x = 10;
   document.getElementById("displayResult4").innerHTML  =  x;
    }

  functionx();
}



// age checker

var _eventListener2 = document.getElementById("userButtonDOB").addEventListener('click',addFunctionDOB);


function addFunctionDOB() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
   document.getElementById("displayDOB").innerHTML  =  day+"/"+month +"/" + year;

}
