// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfwLS2q4RZ2dcZ9MdU5swHTUPAbQFvBVQ",
  authDomain: "attendancetrackingsystem-4c264.firebaseapp.com",
  projectId: "attendancetrackingsystem-4c264",
  storageBucket: "attendancetrackingsystem-4c264.appspot.com",
  messagingSenderId: "970122060406",
  appId: "1:970122060406:web:a354f97a880fb7305b3557",
  measurementId: "G-C9Y8Z8J8KV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Add attendance record
database.ref('attendance').push({
  name: 'John Doe',
  age: 30,
  userId: '12345',
  timing: '08:00',
  photoUrl: 'path/to/photo'
});
