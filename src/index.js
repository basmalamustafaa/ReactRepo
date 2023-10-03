import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserContextProvider from './Context/UserToken'; 
const root = ReactDOM.createRoot(document.getElementById('root'));



// {/* keda bakhly el userToken aw el userContext wrapped over the whole app so the token can be shared all over the app */}
root.render(


    <UserContextProvider> 
    <App />
    </UserContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
