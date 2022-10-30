const resDiv = document.querySelector('#results');
const resBtn = document.querySelector('#getAdvice');

const url = 'https://api.adviceslip.com/advice';

resBtn.addEventListener('click', () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const adviceObj = data.slip;
      console.log(adviceObj);
      resDiv.innerHTML = `<h1 id="title">ADVICE #${adviceObj.id}</h1> 
      <h2 id="advice">"${adviceObj.advice}"</h2>`;
    })
    .catch((err) => {
      console.log(err);
    });
}
