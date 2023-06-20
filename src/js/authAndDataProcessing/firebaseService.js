import { refs } from './refs';

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
      // Sign-out successful.
      console.log('Sign-out successful.');
    })
    .catch(error => {
      console.log(error);
    });
}

async function getLib() {
  const docSnap = await getDoc(userRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data().books);
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
    await setDoc(userRef, { books: [] });
  }
}

// Listener of logged in user or not
onAuthStateChanged(auth, user => {
  if (user) {
    userRef = doc(db, 'users', auth.currentUser.uid);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    setTimeout(() => {
      refs.greeting.textContent = `${user.displayName}`;
      refs.greeting.style.display = 'flex';
    }, 500);
    refs.btnLogOut.style.display = 'flex';
    refs.btnOpenLogInModal.style.display = 'none';
    console.log('signet in');

    getLib();
    unsub = onSnapshot(userRef, doc => {
      const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
      console.log(source, ' data: ', doc.data());
    });
    // ...
  } else {
    // User is signed out
    // ...
    refs.isAuthElements = document.querySelectorAll('[data-is-auth]');
    console.log(refs.isAuthElements);
    refs.greeting.style.display = 'none';
    refs.btnLogOut.style.display = 'none';
    refs.btnOpenLogInModal.style.display = 'flex';
    console.log('not signet in');
  }
});

refs.btnLogOut.addEventListener('click', logOut);

export { addBookData, removeBookData, signUpEmailPassword, loginEmailPassword };
