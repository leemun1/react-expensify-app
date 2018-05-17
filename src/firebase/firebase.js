import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA_eZZF5sTWmNMRtCCZe9YmlmbF9_0zwAg",
  authDomain: "expensify-d09ce.firebaseapp.com",
  databaseURL: "https://expensify-d09ce.firebaseio.com",
  projectId: "expensify-d09ce",
  storageBucket: "",
  messagingSenderId: "429774935892"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: "Mike Lee",
  age: 26,
  isSingle: true,
  location: {
    city: 'Toronto',
    country: 'Canada'
  }
});

database.ref('location/city').set('Montreal');

database.ref('attributes').set({
  height: 173,
  weight: 67
});
