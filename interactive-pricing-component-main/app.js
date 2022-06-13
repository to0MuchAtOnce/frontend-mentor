const slider = document.getElementById('slider');
const numViews = document.getElementById('numViews');
const frequencyToggle = document.getElementById('billing-frequency');
const form = document.getElementById('card');

numViews.innerText = slider.value;

slider.oninput = function () {
  numViews.innerText = this.value;
};

form.addEventListener('submit', (e) => e.preventDefault());
