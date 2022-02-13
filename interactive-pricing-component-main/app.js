const slider = document.getElementById('slider');
const selector = document.getElementById('selector');

slider.oninput = function () {
  selector.style.left = this.value + '%';
};
