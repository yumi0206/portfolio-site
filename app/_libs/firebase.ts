import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, getDocs } from 'firebase/firestore';
import useStore from './useStore'; // Adjust the path as necessary

const firebaseConfig = {
  apiKey: 'AIzaSyBo7iKV0b8zbAayQ7uv9O93BEXfCVBdk1k',
  authDomain: 'portfolio-b9311.firebaseapp.com',
  projectId: 'portfolio-b9311',
  storageBucket: 'portfolio-b9311.appspot.com',
  messagingSenderId: '347144127134',
  appId: '1:347144127134:web:c8426f037c1790a6fdb18f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Setting up the Google authentication provider
const provider = new GoogleAuthProvider();

// Google Login function
const GoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Update Zustand store
    useStore.getState().updateUser(true, user.email!, user.displayName!, user.photoURL!);

    console.log('Logged in user:', user);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to log in with Google: ');
  }
};

interface ContactData {
  email: string;
  content: string;
  contactType: string;
  name: string;
}


const submitContact = async (contactData: ContactData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...contactData,
      submittedAt: new Date(),
    });
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    throw new Error('Failed to submit contact');
  }
};

export { GoogleLogin, submitContact };

