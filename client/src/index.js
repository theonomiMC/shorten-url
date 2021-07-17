import React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from "./context/AuthContext"
import App from './App'
import './index.css'

ReactDOM.render(
  <AuthProvider>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </AuthProvider>,
  document.getElementById('root')
);