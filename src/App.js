import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";

function App() {

  // Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0cIUlBq6133vWIhM0ccav8i-Yh_2ncCQ",
  authDomain: "testdeploy-5fd1b.firebaseapp.com",
  projectId: "testdeploy-5fd1b",
  storageBucket: "testdeploy-5fd1b.appspot.com",
  messagingSenderId: "178875935475",
  appId: "1:178875935475:web:a96c4f7176ec5af5126586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
