function alignLeft() {
  document.getElementById('text').style.textAlign = 'left';
}

function alignCenter() {
  document.getElementById('text').style.textAlign = 'center';
}

function alignRight() {
  document.getElementById('text').style.textAlign = 'right';
}

function toggleDarkMode() {
  var container = document.querySelector('.container');
  container.classList.toggle('dark-mode');
}
