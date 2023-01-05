// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore, collection, getDocs } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDLef5MpWNAy1sNaDa7Dsglonqe6uQ_gA",
  authDomain: "bella-secrets.firebaseapp.com",
  projectId: "bella-secrets",
  storageBucket: "bella-secrets.appspot.com",
  messagingSenderId: "930025419452",
  appId: "1:930025419452:web:9a40229af75d38d7d5d6b9",
  measurementId: "G-F4Z84H21J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*const analytics = getAnalytics(app);*/

// init firestore service
const db:Firestore = getFirestore()

// collection reference
const colRef = collection(db, 'Inventory')

// interface for firestore collection
interface Products {
  id: string,
/*  Brand: string,
  Image_Name: string,
  Product_Name: string,
  Product_Type: string,
  Quantity: number, */
  [key:string]: any
}

const data: Products[] = []

const collectionSnapshot = await getDocs(collection(db, "Inventory"));



collectionSnapshot.forEach((doc) => {
  data.push({ ...doc.data(), id:doc.id})
})

export const load = () => {return data}

