import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBYGUD-zs8tEvMH_syknBxgCP8JaLsPWEc",
  authDomain: "lpeonline.firebaseapp.com",
  projectId: "lpeonline",
});

export const db = firebase.firestore();
