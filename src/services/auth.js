import auth from '@react-native-firebase/auth';

export const signupUser = async (email, password) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    console.log('register email sucessfull');
    return userCredential;
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage =
          'This email is already in use. Please use different email address';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password is too weak use at least 6 characters';
        break;
      default:
        errorMessage = 'An unknown error occured';
    }
    throw new Error(errorMessage);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return userCredential;
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password';
        break;
      case 'auth/user-not-found':
        errorMessage = 'No user found with this email';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email format';
        break;
      default:
        errorMessage = 'An unknown error occurred';
    }
    throw new Error(errorMessage);
  }
};

export const userLogout = async () => {
  try {
    await auth().signOut();
    console.log('User signed out successfully');
  } catch (error) {
    console.log('Error signing out:', error);
  }
};
