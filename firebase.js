import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCRxed6Euu5AMI317kxDHaZeq-3xkhpgmA',
  authDomain: 'stooply-62b5b.firebaseapp.com',
  databaseURL: 'https://stooply-62b5b-default-rtdb.firebaseio.com',
  projectId: 'stooply-62b5b',
  storageBucket: 'stooply-62b5b.appspot.com',
  messagingSenderId: '754736573034',
  appId: '1:754736573034:web:6604df2099ff5bcba4f813',
  measurementId: 'G-KDCTVCWRPZ',
};

firebase.initializeApp(config);

const db = firebase.firestore();
const storage = firebase.storage();

module.exports = { storage, db };
