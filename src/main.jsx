import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux'
import Store from './redux/Store.js'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
    <ToastContainer
          theme="dark"
          position="top-center"
          autoClose={2000}
          closeOnClick
          pauseOnHover={false} />
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
