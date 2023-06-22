export const refs = {
  btnLogOut: document.querySelector('.js-logOut'),
  btnOpenLogInModal: document.querySelector('.js-open-modal'),
  greeting: document.querySelector('.js-greeting'),
  iconDown: document.querySelector('.icon-down-user'),
  user: document.querySelector('.user-login-wrapper'),
  userIcon: document.querySelector('.icon-user-login'),
  btnLog: document.querySelector('.button-log'),
  btnUser: document.querySelector('.button-user'),
  
  closeBtn: {},
  switchModalBtns: {},
  form: {},
  modalForm: {},
  // shoppingListLink: document.querySelector('[data-is-auth-link]'),
};

/**
 * 1 По кнопці входу відкривається модалка для логіну
 * 2 при сабміті на реєстрацію відбувається закриття
 * модалки та вхід на сторінку
 * 3 Якщо зареєстрований користувач, то відбувається вхід(якщо все валідується)
 *  в профіль
 *
 * 4 Якщо юзер не залогінений:
 * - Шопінг листа немає
 * - кнопка додати до бібліотеки не активна
 *
 * 5 Зробити викидання помилок від автентифікації. Типу якщо код не правильний або емейл вже зайнятий
 * 6 Валідацію при логіні не виконувати
 * 7 Відправляється запит при неправильному паролі
 */

/**
 * Лівий інпут
 * затримка на отримання Імені
 * Валідація
 * Підказки
 */
