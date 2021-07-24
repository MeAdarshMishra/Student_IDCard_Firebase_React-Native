import firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyAz2kD7Fk4rK_R7N5MoPQKpp_QQFMnyBiw',
  authDomain: 'adarshmishra-a5369.firebaseapp.com',
  projectId: 'adarshmishra-a5369',
  storageBucket: 'adarshmishra-a5369.appspot.com',
  messagingSenderId: '760537968738',
  appId: '1:760537968738:web:4afdafd632f49a62bf213b',
  measurementId: 'G-S2H31EJKL1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase.database();
