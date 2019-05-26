import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "ms2fm-chris",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();