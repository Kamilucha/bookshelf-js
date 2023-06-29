import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from 'firebase/firestore';

const authHide = document.querySelector('.auth-hide');
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAv9FmtcpRb4rflw6K6IuqfaJrJWVCYfkw',
  authDomain: 'bookshelf-2f40f.firebaseapp.com',
  databaseURL:
    'https://bookshelf-2f40f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bookshelf-2f40f',
  storageBucket: 'bookshelf-2f40f.appspot.com',
  messagingSenderId: '578193415348',
  appId: '1:578193415348:web:8b4047b41c95ecc1278be1',
  measurementId: 'G-B0N26TBFD1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let userRef = {};
let unsub = {};

function getValues() {
  const logInModalRefs = {
    txtUserName: document.querySelector('#txtName'),
    txtEmail: document.querySelector('#txtEmail'),
    txtPsw: document.querySelector('#txtPsw'),
  };

  return {
    email: logInModalRefs.txtEmail.value,
    password: logInModalRefs.txtPsw.value,
    userName: logInModalRefs.txtUserName
      ? logInModalRefs.txtUserName.value
      : '',
  };
}

async function addBookData(card) {
  await updateDoc(userRef, {
    books: arrayUnion(card),
  });
}
async function removeBookData(card) {
  await updateDoc(userRef, {
    books: arrayRemove(card),
  });
}

async function signUpEmailPassword() {
  const values = getValues();

  const { email, password, userName } = values;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(auth.currentUser, {
    displayName: userName,
  });
  return userCredential;
}

async function loginEmailPassword() {
  const values = getValues();

  const { email, password } = values;

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential;
}

async function logOut(e) {
  e.preventDefault();
  unsub();
  signOut(auth)
    .then(() => {
      const list = document.querySelector('.js-shopping-list-page');
      // Sign-out successful.
      // console.log('Sign-out successful.');
      Notify.success('Log out successful', {
        fontFamily: 'DM Sans',
        fontSize: '16px',
        clickToClose: true,
        cssAnimationStyle: 'from-top',
        timeout: 2000,
        position: 'center-top',
        success: { background: '#eac645' },
      });
      // if (list) {
      setTimeout(() => {
        document.location.href = 'index.html';
      }, 1000);
      // }
    })

    .catch(error => {
      console.log(error);
    });
}

async function getLib() {
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    // console.log('Document data:', docSnap.data().books);
    return docSnap.data().books;
  } else {
    // docSnap.data() will be undefined in this case
    // console.log('No such document!');
    await setDoc(userRef, { books: [] });
  }
}
checkIsAuth();
// Listener of logged in user or not
function checkIsAuth(modalAddRemBtn) {
  onAuthStateChanged(auth, user => {
    if (user) {
      userRef = doc(db, 'users', auth.currentUser.uid);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setTimeout(() => {
        [...refs.userName].map(el => {
          el.textContent = user.displayName;
        });

        refs.greeting.classList.add('flex');
        refs.greetingMob.classList.add('flex');
      }, 600);

      refs.iconDown.classList.add('block');

      [...refs.user].map(btn => {
        btn.classList.add('flex');
      });
      [...refs.btnLog].map(btn => {
        btn.style.display = 'none';
      });

      [...refs.btnOpenLogInModal].map(btn => {
        btn.classList.add('none');
      });

      refs.btnLogOutMob.classList.add('button-log-out-mob');
      // console.log('signet in');
      getLib();

      authHide.classList.add('auth-block');
      authHide.classList.remove('auth-hide');

      unsub = onSnapshot(userRef, doc => {
        const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
        // console.log(source, ' live data: ', doc.data());
        /**
         * Це слухач подій з даними бібіліотеки в реальному часі
         * Тут перерендерювати картки в бібіліотеці
         * після безпосереднього видалення її на сторінці бібілотеки
         */
      });

      refs.shoppingListLink.style.display = 'list-item';
      refs.btnLogOutTablDesk.style.display = 'flex';

      // ...
    } else {
      // User is signed out
      // ...
      // userName.remove();
      authHide.classList.remove('auth-block');
      authHide.classList.add('auth-hide');

      refs.btnUser.classList.remove('flex-2');
      refs.btnUser.classList.remove('flex');

      refs.greeting.classList.remove('flex');
      refs.greetingMob.classList.remove('flex');
      refs.iconDown.classList.remove('block');

      [...refs.user].map(btn => {
        btn.classList.remove('flex');
      });
      [...refs.btnLog].map(btn => {
        btn.style.display = 'flex';
      });
      refs.btnLogOutTablDesk.style.display = 'none';
      refs.btnLogOutTablDesk.classList.remove('button-log-out-toggle');
      refs.btnLogOutMob.classList.remove('button-log-out-mob');

      [...refs.btnOpenLogInModal].map(btn => {
        btn.classList.remove('none');
      });
      refs.shoppingListLink.style.display = 'none';
      // console.log('not signet in');
    }
  });
}

function checkState(modalAddRemBtn) {
  onAuthStateChanged(auth, user => {
    if (user) {
      userRef = doc(db, 'users', auth.currentUser.uid);
      // User is signed in, see docs for a list of available properties

      if (modalAddRemBtn) {
        modalAddRemBtn.disabled = false;
      }
    } else {
      // User is signed out

      if (modalAddRemBtn) {
        modalAddRemBtn.disabled = true;
        modalAddRemBtn.textContent = 'Unlock button after Log in';
        // modalAddRemBtn.addEventListener('click', () => {
        //   Notify.info('You have to Log in for addin content to your list!');
        // });
      }
    }
  });
}

[...refs.btnLogOut].map(btn => {
  btn.addEventListener('click', logOut);
});

refs.greeting.addEventListener('click', greetingHandler);

function greetingHandler() {
  refs.btnLogOutTablDesk.classList.toggle('button-log-out-toggle');
}

export {
  addBookData,
  removeBookData,
  signUpEmailPassword,
  loginEmailPassword,
  checkState,
};
