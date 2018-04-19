import firebase from 'react-native-firebase';

const database = firebase.database();
const auth = firebase.auth();
const fb = firebase;

export default {
  database,
  auth,
  fb
};
