const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {

  if (email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }

  var x = document.getElementById('mail');

  if (x.validity.valid) {
    x.style.borderColor = "#507a36";
    x.style.background = "url(../images/icons/_done.svg) no-repeat center right";
  } else {
    x.style.borderColor = "#df4e3c";
    x.style.background = "url(../images/icons/_close.svg) no-repeat center right";
  }

});

form.addEventListener('submit', function (event) {

  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Incorrect email';
  } 

  emailError.className = 'error active';
}
