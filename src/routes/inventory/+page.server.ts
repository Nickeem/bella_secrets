import PocketBase, { ListResult } from 'pocketbase';
import type { K, T } from 'vitest/dist/types-71ccd11d';

const pb = new PocketBase('http://45.33.79.208');

// interface for firestore collection
export interface Products {
  id: string,
  brand: string,
  collectionName: 'products',
  name: string,
  type: string,
  quantity: number,
  price: number,
  product_preview: string,
  [key:string]: any
};

export interface Products_array extends Array<Products>{};

export interface payload {"data": Products_array};

let resultList;
let data: Products[];

// fetch a paginated records list
try {
  let resultList = await pb.collection('products').getList(1, 20
    //, {filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2', }
  );
  data = JSON.parse(JSON.stringify(resultList.items));
} catch (error) {
  console.log(error)
  data = []
}


export const load = () => {
  if (data.length) {
    return {data}
  }
  else {
    data = [{
      brand: "Victoria's Secret",
      collectionId: 'r53d0hpywnae3si',
      collectionName: 'products',
      created: '2023-01-14 00:53:58.128Z',
      id: '68qcfnybf0i6j4v',
      name: 'Cherry Elxir',
      price: 25,
      product_preview: 'cherry_elixir.jpg',
      quantity: 1,
      type: 'Body Spray',
      updated: '2023-01-14 01:15:33.058Z',
      expand: {}
    },
    {
      brand: 'Bath & Body Works',
      collectionId: 'r53d0hpywnae3si',
      collectionName: 'products',
      created: '2023-01-14 01:42:10.415Z',
      id: '2div01o20nstm3v',
      name: 'Pink Pineapple Sunrise',
      price: 20,
      product_preview: 'pink_pineapple_sunrise.jpg',
      quantity: 3,
      type: 'Hand Soap',
      updated: '2023-01-14 01:42:10.415Z',
      expand: {}
    }];
    return {data};
  }
  
}

// console.log(resultList.items);

















/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore, collection, getDocs } from 'firebase/firestore'
// import { getStorage } from "firebase/storage";

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
// const analytics = getAnalytics(app);

// code doesn't need to be executed duaring testing phase

// init firestore service
const db:Firestore = getFirestore()

// collection reference
const colRef = collection(db, 'Inventory')



const data: Products[] = []

const collectionSnapshot = await getDocs(collection(db, "Inventory"));



collectionSnapshot.forEach((doc) => {
  let raw_data = doc.data()
  data.push({
    id:doc.id,
    Brand: raw_data.Brand,
    Image_Name: raw_data.Image_Name,
    Product_Name: raw_data.Product_Name,
    Product_Type: raw_data.Product_Type,
    Quantity: raw_data.Quantity,
    })
})

 */