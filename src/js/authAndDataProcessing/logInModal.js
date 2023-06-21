// import { addTipListeners, removeTipListeners } from './imputTipMessage';
import { closeModal } from './closeModal';
import { validation } from './loginValidation';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

import { refs } from './refs';

let instance = {};
let isSignUp = false;

const options = {
  handler: null,
  onShow(instance) {
    this.handler = closeModal.bind(instance);
    document.addEventListener('keydown', this.handler);
    document.addEventListener('keydown', this.handler);
  },

  onClose() {
    document.removeEventListener('keydown', this.handler);
    refs.closeBtn.removeEventListener('click', handleClose);
  },
};

function onOpenModal(e) {
  isSignUp = false;
  instance = basicLightbox.create(
    `<div class="modal_body">
      <button class="close_btn" aria-label="Close modal">X</button>

      <form class="form" name="logInForm">
        <div class="labels-wrapper">
          <label>
            <input
              class="input-field"
              id="txtEmail"
              type="text"
              placeholder="Email"
              name="email"
              data-rules="bail|required|email"
          /></label>

          <label>
            <input
              class="input-field"
              id="txtPsw"
              type="password"
              placeholder="Password"
              name="psw"
              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."
              data-rules="bail|required"
          /></label>
        </div>

        <button class="modal__btn modal__btn-primary" id="btnSignin" type="submit">
          Sign-in
        </button>
      </form>

      <div class="switch-modal-btns">
  <button class="modal__btn js-sign-up-btn" aria-label="Switch to sign up">
    sign up
  </button>
  <button class="modal__btn accent js-sign-in-btn" aria-label="Switch to sign in">
    sign in
  </button>
</div>
    </div>`,
    options
  );
  instance.show(() => {
    validation();

    refs.closeBtn = document.querySelector('.close_btn');
    refs.switchModalBtns = document.querySelector('.switch-modal-btns');
    refs.form = document.querySelector('.form');

    refs.closeBtn.addEventListener('click', handleClose);
    refs.switchModalBtns.addEventListener('click', handleSwitch);
  });
}

function handleClose() {
  instance.close();
}

function handleSwitch(e) {
  const button = e.target.classList.value;
  if (button.includes('js-sign-up-btn')) {
    /**
     * Підказки при введенні в поля реєстрації.
     * Не впевнений що вони нам потрібні, але логіка готова
     * Потрібна стилізація
     */
    // addTipListeners();
    refs.form.setAttribute('name', 'signUpForm');
    refs.form.innerHTML = `
        <div class="labels-wrapper">
          <label>
            <input
              class="input-field"
              id="txtName"
              type="text"
              placeholder="Name"
              name="userName"
              title="Example &quot;John&quot;"
              data-rules="bail|required|alpha|between:2,32|x-regex:firstCapital"
          /></label>
          <label>
            <input
              class="input-field"
              id="txtEmail"
              type="text"
              placeholder="Email"
              name="email"
              data-rules="bail|required|email"
          /></label>

          <label>
            <input
              class="input-field"
              id="txtPsw"
              type="password"
              placeholder="Password"
              name="psw"
              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."
              data-rules="bail|required|x-regex:password"
          /></label>
        </div>

        <button class="modal__btn modal__btn-primary" id="btnSignup" type="submit">
          Sign-up
        </button>
      `;
    e.target.classList.add('accent');
    e.target.nextElementSibling.classList.remove('accent');
    isSignUp = true;
  } else if (button.includes('js-sign-in-btn')) {
    // Знімає слухачі для підказок при введенні в поля реєстрації.
    // removeTipListeners();
    refs.form.setAttribute('name', 'logInForm');
    refs.form.innerHTML = `
        <div class="labels-wrapper">
          <label>
            <input
              class="input-field"
              id="txtEmail"
              type="text"
              placeholder="Email"
              name="email"
              data-rules="bail|required"
          /></label>

          <label>
            <input
              class="input-field"
              id="txtPsw"
              type="password"
              placeholder="Password"
              name="psw"
              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."
              data-rules="bail|required"
          /></label>
        </div>

        <button class="modal__btn modal__btn-primary" id="btnSignin" type="submit">
          Sign-in
        </button>
      `;
    e.target.classList.add('accent');
    e.target.previousElementSibling.classList.remove('accent');
    isSignUp = false;
  }
}

refs.btnOpenLogInModal.addEventListener('click', onOpenModal);

export { isSignUp, handleClose };
