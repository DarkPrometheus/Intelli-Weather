import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseAppProvider } from "reactfire"
import firebaseConfig from "./firebase-config"

ReactDOM.render(
  <App />,
  document.getElementById('root')
);