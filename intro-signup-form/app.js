const form = document.getElementById('form');

// EVENT LISTENERS
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const first = form['firstname'].value;
  const last = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  console.log(first, last, email, password);

  if ((first = '')) {
    console.log('No');
  }
});
