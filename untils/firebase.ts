// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD5ne3hezFUwtAgTfYdulENFLB_BxiJ0lo',
  authDomain: 'netflix-clone-e867d.firebaseapp.com',
  projectId: 'netflix-clone-e867d',
  storageBucket: 'netflix-clone-e867d.appspot.com',
  messagingSenderId: '496342069731',
  appId: '1:496342069731:web:99ef246161c1d6f8e9f0d6'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
