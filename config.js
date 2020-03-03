import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyB-z2W3xwJ4hMIN-fpwAX_pLN3cxbPjKCQ',
  authDomain: 'tecp-b33ce.firebaseapp.com',
  databaseURL: 'https://tecp-b33ce.firebaseio.com',
  projectId: 'tecp-b33ce',
  storageBucket: 'tecp-b33ce.appspot.com',
  messagingSenderId: '844951387766',
  appId: '1:844951387766:web:42fd8505055e1013c72957',
  measurementId: 'G-PM1BTQVQQ7',
};
// Initialize Firebase
let app = Firebase.initializeApp(config);
export const db = app.database();
