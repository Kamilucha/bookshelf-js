import { loginEmailPassword, signUpEmailPassword } from './firebaseService';
import { refs } from './refs';
import { isSignUp, handleClose } from './logInModal';
import { Validator, enLang as en } from '@upjs/facile-validator';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { checkAuthError } from './checkAuthError';
import { removeTipListeners } from './inputTipMessage';

let v = {};

function validation() {
  refs.modalForm = document.querySelector('.form');
  const { modalForm } = refs;

  // Create an instance of Validator for the container element
  v = new Validator(modalForm, {
    lang: en,
    xRules: {
      firstCapital: /[A-Z][a-z]/,
      password: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,10}/,
    },
    on: {
      'validation:start': form => {
        // This function will be executed when the validation starts
        if (!form.querySelector('#txtName')) {
          form.querySelector('#txtEmail').style.borderColor = '#111111';
          form.querySelector('#txtPsw').style.borderColor = '#111111';
        } else {
          form.querySelector('#txtName').style.borderColor = '#111111';
          form.querySelector('#txtEmail').style.borderColor = '#111111';
          form.querySelector('#txtPsw').style.borderColor = '#111111';
        }
      },
      'validation:failed': () => {
        return;
      },
      'field:error': (modalForm, field, errors) => {
        errors.forEach(error => {
          if (modalForm.name === 'signUpForm') {
            if (error.element && error.element.name === 'userName') {
              error.element.style.borderColor = 'red';
              error.message = 'Please enter a valid username! Ex. "John"';
            }
            if (error.element.name === 'email') {
            }
            if (error.element.name === 'psw') {
              error.message =
                'Please enter a valid password! Password length from 6 to 10 characters, consists of the following - lowercase (a-z) and uppercase (A-Z).';
            }
            removeTipListeners();
          } else if (modalForm.name === 'logInForm') {
            if (error.element.name === 'email') {
              error.message = 'Required';
            }
            if (error.element.name === 'psw') {
              error.message = 'Required';
            }
          }

          if (error.element.name === 'email') {
            error.element.style.borderColor = 'red';
          }
          if (error.element.name === 'psw') {
            error.element.style.borderColor = 'red';
          }
        });
      },
      'validation:success': () => {
        if (isSignUp) {
          signUpEmailPassword()
            .then(resp => {
              // console.log(resp.user);
              handleClose();
            })
            .catch(e => {
              Notify.failure(checkAuthError(e), {
                fontFamily: 'DM Sans',
                fontSize: '16px',
                clickToClose: true,
                cssAnimationStyle: 'from-top',
                timeout: 2000,
                position: 'center-top',
              });
            });
        } else {
          loginEmailPassword()
            .then(resp => {
              // console.log(resp.user);
              handleClose();
            })
            .catch(e => {
              Notify.failure(checkAuthError(e), {
                fontFamily: 'DM Sans',
                fontSize: '16px',
                clickToClose: true,
                cssAnimationStyle: 'from-top',
                timeout: 2000,
                position: 'center-top',
              });
            });
        }
      },
    },
  });

  modalForm.addEventListener('submit', onSubmit);
}

function onSubmit(e) {
  e.preventDefault();
  // Call validate method to start validation
  v.validate();
}

export { validation };
