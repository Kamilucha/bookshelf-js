const tipMess = document.createElement('p');
tipMess.className = 'validator-err';
function addTipListeners() {
  const form = document.querySelector('.form');

  form.addEventListener('focusin', focusInHendler);
  form.addEventListener('focusout', focusOutHendler);
}

function removeTipListeners() {
  const form = document.querySelector('.form');

  form.removeEventListener('focusin', focusInHendler);
  form.removeEventListener('focusout', focusOutHendler);
}

function focusInHendler(e) {
  const { name } = e.target;
  if (name === 'userName') {
    tipMess.textContent = 'Example "John"';
    e.target.after(tipMess);
  }
  if (name === 'psw') {
    tipMess.textContent =
      'Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z).';
    e.target.after(tipMess);
  }
}

function focusOutHendler(e) {
  const { name } = e.target;
  if (name === 'userName') {
    e.target.nextElementSibling.remove();
  }
  if (name === 'psw') {
    e.target.nextElementSibling.remove();
  }
}

export { addTipListeners, removeTipListeners };
