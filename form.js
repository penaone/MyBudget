var entry1 = document.getElementById("entry1");
entry1.addEventListener("click", displayDetails1);
var row = 1;
var entry2= document.getElementById("entry2");
entry2.addEventListener("click", displayDetails2);
var row2 = 1;

function displayDetails1(){
  var iname = document.getElementById("iname").value;
  var iamount = document.getElementById("incAmount").value;
  var iactual = document.getElementById("incActual").value;
  var idiff = (iamount-iactual);
  if (!iname || !iamount || !iactual) {
    alert("Please enter a value. (even zero)");
    return;
  }

  var display = document.getElementById("display");
  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  cell1.innerHTML = iname;
  cell2.innerHTML = iamount;
  cell3.innerHTML = iactual;
  cell4.innerHTML = idiff;


  row++;

}
function displayDetails2(){
  var ename = document.getElementById("ename").value;
  var eamount = document.getElementById("expAmount").value;
  var eactual = document.getElementById("expActual").value;
  var ediff = (eamount-eactual)
  if (!ename || !eamount || !eactual) {
    alert("Please enter a value. (even zero)");
    return;
  }

  var display = document.getElementById("display2");
  var newRow = display.insertRow(row2);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = ename;
  cell2.innerHTML = eamount;
  cell3.innerHTML = eactual;
  cell4.innerHTML = ediff;

  row2++;
}
