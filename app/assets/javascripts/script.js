function alterBuns(x) {
  x.classList.toggle('change');
  dropdown();
  bkgdChange();
}

function dropdown() {
    document.getElementById("hamburger").classList.toggle("show");
}

function bkgdChange() {
  document.getElementById("bkgdchange").classList.toggle("bkgdColors")
}
