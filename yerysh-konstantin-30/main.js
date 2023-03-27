const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');
const count3 = document.getElementById('count3');
const count4 = document.getElementById('count4');
const count5 = document.getElementById('count5');

let voteCount1 = 0;
let voteCount2 = 0;
let voteCount3 = 0;
let voteCount4 = 0;
let voteCount5 = 0;

btn1.addEventListener('click', () => {
  voteCount1++;
  count1.innerHTML = voteCount1;
});

btn2.addEventListener('click', () => {
  voteCount2++;
  count2.innerHTML = voteCount2;
});

btn3.addEventListener('click', () => {
  voteCount3++;
  count3.innerHTML = voteCount3;
});

btn4.addEventListener('click', () => {
  voteCount4++;
  count4.innerHTML = voteCount4;
});

btn5.addEventListener('click', () => {
  voteCount5++;
  count5.innerHTML = voteCount5;
});
