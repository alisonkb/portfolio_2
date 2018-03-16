function alterBuns(x) {
  x.classList.toggle('change');
  dropdown();
  bkgdChange();
  topBarLength();
  hideContent();
}

function dropdown() {
    document.getElementById("hamburger").classList.toggle("show");
}

function bkgdChange() {
  document.getElementById("bkgdchange").classList.toggle("bkgdColors");
}

function topBarLength() {
  document.getElementById('top-bar-length').classList.toggle('make-bar-longer');
}

function hideContent() {
  document.getElementById('body-content').classList.toggle('hide');
}

function showPXCO() {
  document.getElementById('pxco-descript').classList.toggle('show-pxco');
}

function showBudgie() {
  document.getElementById('budgie-descript').classList.toggle('show-budgie');
}

// function showLess() {
//   let mathSign = document.getElementById('show-less').innerHTML;
//   if (mathSign === "+") {
//     document.getElementById('show-less').innerHTML = "-";
//   } else {
//     document.getElementById('show-less').innerHTML = "+";
//   }
// }

function showLess(x) {
  let mathSign = x.innerHTML;
  console.log(mathSign)
  if (mathSign === "+") {
    x.innerHTML = "-";
  } else {
    x.innerHTML = "+";
  }
}
