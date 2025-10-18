// TEMPORARY MOCK AUTH SERVICE
// This file provides mock authentication services for UI development without Firebase
// TODO: Replace with real Firebase auth when ready

console.warn('🚨 USING MOCK AUTH SERVICE - FOR DEVELOPMENT ONLY');

// Mock user data
const mockUser = {
  uid: 'mock-user-123',
  email: 'demo@example.com',
  displayName: 'Demo User',
  photoURL: null,
  streak: 0,
  points: 0,
  createdAt: new Date().toISOString(),
  lastLoginAt: new Date().toISOString()
};

let currentUser = null;
let authCallbacks = [];

/**
 * Sign up a new user with email and password
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {string} displayName - User's display name
 * @returns {Promise<Object>} User data
 */
export async function signUp(email, password, displayName) {
  console.log('Mock signUp called with:', { email, displayName });
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Create mock user
  const user = {
    uid: `mock-user-${Date.now()}`,
    email: email,
    displayName: displayName,
    photoURL: null
  };
  
  currentUser = user;
  notifyAuthCallbacks(user);
  
  return user;
}

/**
 * Sign in an existing user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<Object>} User data
 */
export async function signIn(email, password) {
  console.log('Mock signIn called with:', { email });
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Create mock user
  const user = {
    uid: `mock-user-${Date.now()}`,
    email: email,
    displayName: email.split('@')[0],
    photoURL: null
  };
  
  currentUser = user;
  notifyAuthCallbacks(user);
  
  return user;
}

/**
 * Sign out the current user
 * @returns {Promise<void>}
 */
export async function logOut() {
  console.log('Mock logOut called');
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  currentUser = null;
  notifyAuthCallbacks(null);
}

/**
 * Send password reset email
 * @param {string} email - User's email
 * @returns {Promise<void>}
 */
export async function resetPassword(email) {
  console.log('Mock resetPassword called with:', email);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, this would send an email
  alert(`Mock: Password reset email would be sent to ${email}`);
}

/**
 * Get current user's Firestore data
 * @param {string} uid - User ID
 * @returns {Promise<Object>} User data from Firestore
 */
export async function getUserData(uid) {
  console.log('Mock getUserData called with:', uid);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockUser;
}

/**
 * Subscribe to auth state changes
 * @param {Function} callback - Function to call with user data
 * @returns {Function} Unsubscribe function
 */
export function subscribeToAuthChanges(callback) {
  console.log('Mock subscribeToAuthChanges called');
  
  authCallbacks.push(callback);
  
  // Immediately call with current user (if any)
  if (currentUser) {
    callback(currentUser);
  } else {
    callback(null);
  }
  
  // Return unsubscribe function
  return () => {
    const index = authCallbacks.indexOf(callback);
    if (index > -1) {
      authCallbacks.splice(index, 1);
    }
  };
}

/**
 * Sign in with Google
 * @returns {Promise<Object>} User data
 */
export async function signInWithGoogle() {
  console.log('Mock signInWithGoogle called');
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const user = {
    uid: `mock-google-user-${Date.now()}`,
    email: 'demo@gmail.com',
    displayName: 'Google Demo User',
    photoURL: 'https://via.placeholder.com/150'
  };
  
  currentUser = user;
  notifyAuthCallbacks(user);
  
  return user;
}

/**
 * Sign in with Apple
 * @returns {Promise<Object>} User data
 */
export async function signInWithApple() {
  console.log('Mock signInWithApple called');
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const user = {
    uid: `mock-apple-user-${Date.now()}`,
    email: 'demo@icloud.com',
    displayName: 'Apple Demo User',
    photoURL: 'https://via.placeholder.com/150'
  };
  
  currentUser = user;
  notifyAuthCallbacks(user);
  
  return user;
}

/**
 * Get auth error message in user-friendly format
 * @param {Error} error - Firebase auth error
 * @returns {string} User-friendly error message
 */
export function getAuthErrorMessage(error) {
  console.log('Mock getAuthErrorMessage called with:', error);
  
  // Return a generic mock error message
  return 'Mock authentication error - this is just for UI development';
}

/**
 * Helper function to notify all auth callbacks
 * @param {Object|null} user - User data or null
 */
function notifyAuthCallbacks(user) {
  authCallbacks.forEach(callback => {
    try {
      callback(user);
    } catch (error) {
      console.error('Error in auth callback:', error);
    }
  });
}

// Export a function to simulate login for testing
export function simulateLogin() {
  const user = {
    uid: 'mock-user-123',
    email: 'demo@example.com',
    displayName: 'Demo User',
    photoURL: null
  };
  
  currentUser = user;
  notifyAuthCallbacks(user);
  return user;
}

// Export a function to simulate logout for testing
export function simulateLogout() {
  currentUser = null;
  notifyAuthCallbacks(null);
}
