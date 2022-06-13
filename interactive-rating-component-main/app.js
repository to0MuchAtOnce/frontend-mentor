const submitBtn = document.querySelector('#submit-btn');
const card = document.querySelector('#card');
const card_2 = document.querySelector('#card-2');
const ratingBtns = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let stars = 3;

submitBtn.addEventListener('click', onSubmit);
ratingBtns.forEach((btn) => {
  btn.addEventListener('click', handleRating);
});

function onSubmit() {
  card.classList.add('hide');
  score.textContent = stars;
  card_2.classList.remove('hide');
}

function handleRating(e) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove('active');
  });

  if (e.target.classList.contains('rating-btn')) {
    e.target.classList.add('active');
  } else {
    e.target.parentElement.classList.add('active');
  }
  stars = e.target.textContent;
}
