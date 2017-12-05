// converter erros do firebase

export const parseSignupErrors = error => {
  switch (error.code) {
    case 'auth/email-already-in-use':
    case 'auth/invalid-email':
      return { email: error.message };
    case 'auth/weak-password':
      return { password: error.message };
    default:
      return { _error: error.message };
  }
};

export const parseSigninErrors = error => {
  return { _error: error.message };
};
