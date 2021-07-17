import React, { createContext, useEffect, useState } from "react"
import axios from "axios"

const AuthContext = createContext()
const baseUrl = "http://localhost:5000"

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [alert, setAlert] = useState('')

  const getLoggedIn = async () => {
    try {
      const response = await axios.get(`${baseUrl}/auth/loggedIn`)
      await setLoggedIn(response.data)
    } catch (e) {
      console.log(e.message)
    }

  }

  useEffect(() => {
    getLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{
      loggedIn,
      getLoggedIn,
      alert, setAlert, baseUrl
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext }
