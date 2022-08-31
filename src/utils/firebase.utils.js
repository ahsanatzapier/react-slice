import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo-0daKFv6Isz4ok-QlykAVmQm9ZsmGno",
  authDomain: "slice-db.firebaseapp.com",
  projectId: "slice-db",
  storageBucket: "slice-db.appspot.com",
  messagingSenderId: "453626314613",
  appId: "1:453626314613:web:92cab4e24a7e14a96f5d3c",
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

/**
 * ***************************
 * createUserDocumentFromAuth
 * ***************************
 */
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  // console.log(userAuth);

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // console.log(userDocRef);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user document", error.message);
    }
  }
  return userDocRef;
};

/**
 * ***********************************
 * createAuthUserWithEmailandPassword
 * ***********************************
 */
export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * ***********************************
 * signInAuthUserWithEmailandPassword
 * ***********************************
 */
export const signInAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};

/**
 * ********************************
 * addSliceToDocumentArrayFromForm
 * ********************************
 */
export const addSliceToSliceArray = async (userAuth, slice) => {
  if (!userAuth && slice) return;

  const userDocRef = doc(db, "slices", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    try {
      await updateDoc(userDocRef, { slices: arrayUnion(slice) });
    } catch (error) {
      console.log("error adding slice to array", error.message);
    }
  }
  return userDocRef;
};

/**
 * ***************************
 * createSliceArrayForUser
 * ***************************
 */
export const createSliceArrayForUser = async (userAuth) => {
  // console.log("userAuth", userAuth);
  // console.log("sliceInfo", sliceInformation);

  if (!userAuth) return;

  const userDocRef = doc(db, "slices", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // console.log(userDocRef);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        slices: [],
      });
      // console.log("Slice Array Created for User");
    } catch (error) {
      console.log("error creating the slice document", error.message);
    }
  }
  return userDocRef;
};

/*
 * **************************
 * getCatagoriesAndDocuments
 * **************************
 */
export const getUserSlicesFromArray = async (userAuth) => {
  const userDocRef = doc(db, "slices", userAuth.uid);

  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data();
};
