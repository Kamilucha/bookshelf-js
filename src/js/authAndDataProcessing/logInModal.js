import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

import { closeModal } from './closeModal';
import { validation } from './loginValidation';
import { addTipListeners, removeTipListeners } from './inputTipMessage';
const svg = {
  password: new URL(
    '../../svgsprite/symbol-defs.svg#icon-lock',
    import.meta.url
  ),
  email: new URL('../../svgsprite/symbol-defs.svg#icon-mail', import.meta.url),
  svgClose: new URL(
    '../../svgsprite/symbol-defs.svg#icon-close',
    import.meta.url
  ),
};

import { refs } from './refs';

const body = document.querySelector('body');

let instance = {};
let isSignUp = false;

const options = {
  handler: null,
  onShow(instance) {
    body.style.overflow = 'hidden';
    this.handler = closeModal.bind(instance);
    document.addEventListener('keydown', this.handler);
    document.addEventListener('keydown', this.handler);
  },

  onClose() {
    body.style.overflow = 'visible';
    document.removeEventListener('keydown', this.handler);
    refs.closeBtn.removeEventListener('click', handleClose);
  },
};

function onOpenModal(e) {
  isSignUp = false;
  instance = basicLightbox.create(
    `<div class="login-modal">
      <button class="close_btn" aria-label="Close modal">
        <svg class="login-icon-close">
          <use href="${svg.svgClose}#icon-close"></use>
        </svg>
      </button>

      <form class="form" name="logInForm" autocomplete="off">
        <div class="labels-wrapper">
          <label class="label">
            <input
              class="input-field"
              id="txtEmail"
              type="text"
              placeholder="Email"
              name="email"
              autocomplete="email"
              data-rules="bail|required|email"
            />
            <svg class="login-icon-mail">
              <use href="${svg.email}#icon-mail"></use>
            </svg>
          </label>

          <label class="label">
            <input
              class="input-field"
              id="txtPsw"
              type="password"
              placeholder="Password"
              name="psw"
              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."
              data-rules="bail|required"
            />
            <svg class="login-icon-password">
              <use href="${svg.password}#icon-lock"></use>
            </svg>
          </label>
        </div>

        <button class="modal__btn modal__btn-primary" id="btnSignin" type="submit">
          Log in
        </button>
      </form>
        <div class="switch-modal-btns">
          <button class="modal__btn js-sign-up-btn" aria-label="Switch to sign up">
            sign up
          </button>
          <button class="modal__btn login-accent js-sign-in-btn" aria-label="Switch to sign in">
            log in
          </button>
        </div>
    </div>`,
    options
  );
  instance.show(() => {
    validation();

    const bgColorModal = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--login-modal-bg');
    document.querySelector('.basicLightbox').style.background = bgColorModal;

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
    addTipListeners();
    refs.form.setAttribute('name', 'signUpForm');
    refs.form.innerHTML = `
        <div class="labels-wrapper">
          <label class="label">
            <input
              class="input-field"
              id="txtName"
              type="text"
              placeholder="Name"
              name="userName"
              title="Example &quot;John&quot;"
              autocomplete="given-name"
              data-rules="bail|required|alpha|between:2,32|x-regex:firstCapital"
          /></label>
          <label class="label">
            <input
              class="input-field"
              id="txtEmail"
              type="text"
              placeholder="Email"
              name="email"
              autocomplete="email"
              data-rules="bail|required|email"
            />
            <svg class="login-icon-mail">
              <use href="${svg.email}#icon-mail"></use>
            </svg>
          </label>

          <label class="label">
            <input
              class="input-field"
              id="txtPsw"
              type="password"
              placeholder="Password"
              name="psw"
              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."
              data-rules="bail|required|x-regex:password"
            />
            <svg class="login-icon-password">
              <use href="${svg.password}#icon-lock"></use>
            </svg>
          </label>
        </div>

        <button class="modal__btn modal__btn-primary" id="btnSignup" type="submit">
          Sign up
        </button>
      `;
    e.target.classList.add('login-accent');
    e.target.nextElementSibling.classList.remove('login-accent');
    isSignUp = true;
  } else if (button.includes('js-sign-in-btn')) {
    // Знімає слухачі для підказок при введенні в поля реєстрації.
    removeTipListeners();
    refs.form.setAttribute('name', 'logInForm');
    refs.form.innerHTML = `
        <div class="labels-wrapper">
          <label class="label">
            <input
              class="input-field"
              id="txtEmail"
              type="text"
              placeholder="Email"
              name="email"
              autocomplete="email"
              data-rules="bail|required"
            />
            <svg class="login-icon-mail">
              <use href="${svg.email}#icon-mail"></use>
            </svg>
          </label>

          <label class="label">
            <input
              class="input-field"
              id="txtPsw"
              type="password"
              placeholder="Password"
              name="psw"
              title="Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z)."
              data-rules="bail|required"
            />
            <svg class="login-icon-password">
              <use href="${svg.password}#icon-lock"></use>
            </svg>
          </label>
        </div>

        <button class="modal__btn modal__btn-primary" id="btnSignin" type="submit">
          Log in
        </button>
      `;
    e.target.classList.add('login-accent');
    e.target.previousElementSibling.classList.remove('login-accent');
    isSignUp = false;
  }
}

[...refs.btnOpenLogInModal].map(btn => {
  btn.addEventListener('click', onOpenModal);
});

export { isSignUp, handleClose };
