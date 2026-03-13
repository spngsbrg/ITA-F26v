let start1 = document.getElementById("btn1");
let start2 = document.getElementById("btn2");

/*start.onclick = function () {
  let txt = document.getElementById("click-txt1");
  txt.innerText = "You clicked ze butten!";
  txt.style.color = "red";
};*/

/*
function clickAlt() {
  txt = document.getElementById("click-txt1");
  txt.style.color = "red";
  txt.innerText = "You clicked ze butten!";
}
*/
function click(e) {
  console.log(e);
  let txt = null;
  if (e.target.id == "btn1") {
    txt = document.getElementById("click-txt1");
    txt.style.color = "red";
  } else if (e.target.id == "btn2") {
    txt = document.getElementById("click-txt2");
    txt.style.color = "green";
  }
  txt.innerText = e.target.innerText;
}

start1.onclick = click;
start2.onclick = click;
