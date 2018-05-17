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

export { firebase, database as default };


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (err) => {
//     console.log(err);
//   });

// database.ref('expenses').push({
//   description: 'Gas Bill',
//   note: '',
//   amount: 17400,
//   createdAt: 20
// });

// database.on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }, (err) => {
//   console.log(err);
// });

// database.ref('name')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// database.ref().set({
//     name: "Mike Lee",
//     age: 26,
//     isSingle: true,
//     location: {
//       city: 'Toronto',
//       country: 'Canada'
//     }
//   })
//   .then(() => {
//     console.log('Data saved!');
//   })
//   .catch((err) => {
//     console.log('This failed.', err);
//   });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('isSingle was removed');
//   })
//   .catch((err) => {
//     console.log('Did not remove data', err);
//   });