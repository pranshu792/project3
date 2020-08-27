
function myFunction() {
  var myobj = document.getElementById("demo");
  myobj.remove();

}
function myFunctionn() {
  var myobjj = document.getElementById("demo1");
  myobjj.remove();

}
function myF() {
  var myobjj = document.getElementById("demo2");
  myobjj.remove();

}
function myFu() {
  var myobjj = document.getElementById("demo3");
  myobjj.remove();

}
function myFun() {
  var myobjj = document.getElementById("demo4");
  myobjj.remove();

}
function myFunc() {
  var myobjj = document.getElementById("demo5");
  myobjj.remove();

}
function myFunct() {
  var myobjj = document.getElementById("demo6");
  myobjj.remove();

}
function myFuncti() {
  var myobjj = document.getElementById("demo7");
  myobjj.remove();

}
function myFunctio() {
  var myobjj = document.getElementById("demo8");
  myobjj.remove();

}


function mySearch() {
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName("row");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsById("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}