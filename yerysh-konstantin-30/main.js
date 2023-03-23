const counts = [0, 0, 0, 0, 0];

function vote(option) {
  counts[option]++;
  updateCounts();
}

function updateCounts() {
  let options = document.getElementsByClassName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].getElementsByClassName("count")[0].innerHTML = counts[i];
  }
}

updateCounts();
