import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAv2NJQvim5XCStiY2LWgqpxrR07c0ncd0',
  authDomain: 'chat-web-app-e09bc.firebaseapp.com',
  projectId: 'chat-web-app-e09bc',
  storageBucket: 'chat-web-app-e09bc.appspot.com',
  messagingSenderId: '647361072549',
  appId: '1:647361072549:web:2da5e3c889f4ce20f56c4c',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
