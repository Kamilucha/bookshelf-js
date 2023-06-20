export function checkAuthError(error) {
  let message = '';
  switch (error.code) {
    case 'auth/email-already-exists':
      message =
        'The provided email is already in use by an existing user. Each user must have a unique email.';
      break;

    case 'auth/email-already-in-use':
      message =
        'The provided email is already in use by an existing user. Each user must have a unique email.';
      break;

    case 'auth/invalid-password':
      message = 'Wrong password.';
      break;

    case 'auth/wrong-password':
      message = 'Wrong password.';
      break;

    case 'auth/user-not-found':
      message = 'There is no existing user with this Email.';
      break;

    default:
      message = `${error.code}`;
  }

  return message;
}
