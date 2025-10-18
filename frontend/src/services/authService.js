// TEMPORARY: Using mock auth service for development without Firebase
// TODO: Replace with real Firebase auth when ready
import {
  signUp,
  signIn,
  logOut,
  resetPassword,
  getUserData,
  subscribeToAuthChanges,
  signInWithGoogle,
  signInWithApple,
  getAuthErrorMessage,
  simulateLogin,
  simulateLogout
} from './authService.mock';

// Re-export mock functions
export { signUp, signIn, logOut, resetPassword, getUserData, subscribeToAuthChanges, signInWithGoogle, signInWithApple, getAuthErrorMessage, simulateLogin, simulateLogout };

// All functions are now imported from the mock service above
