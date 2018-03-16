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
