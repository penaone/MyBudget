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
  var cell5 = newRow.insertCell(4);
  
  cell1.innerHTML = iname;
  cell2.innerHTML = iamount;
  cell3.innerHTML = iactual;
  cell4.innerHTML = idiff;
  cell5.innerHTML = idelete;


  row++;
  let tds = document.getElementById('display').getElementsByTagName('th');
            var sum = 0;
            for(var i = 0; i < tds.length; i ++) {
                if(tds[i].className == 'count-me') {
                    sum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
                }
            }
            document.getElementById('display').innerHTML += '<tr><td>Total</td><td>' + sum + '</td><td>' + sum + '</td><td>' + sum + '</td></tr>';

}
function displayDetails2(){
  var ename = document.getElementById("ename").value;
  var eamount = document.getElementById("expAmount").value;
  var eactual = document.getElementById("expActual").value;
  var ediff = (eamount-eactual);
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

var tds = document.getElementById('display2').getElementsByTagName('th');
            var sum = 0;
            for(var i = 0; i < tds.length; i ++) {
                if(tds[i].className == 'count-me') {
                    sum += isNaN(tds[i].innerHTML) ? 0 : parseInt(tds[i].innerHTML);
                }
            }
            document.getElementById('display2').innerHTML += '<tr><td>Total</td><td>' + sum + '</td><td>' + sum + '</td><td>' + sum + '</td></tr>';
          }

          function deleteRow(r) {
            var i = r.parentNode.parentNode.rowIndex;
            document.getElementById("row1").deleteRow(i);
          }
