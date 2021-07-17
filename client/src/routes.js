import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from './context/AuthContext'
import Register from './pages/Register'
import Login from './pages/Login'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Users from './pages/Users'
import Links from './pages/Links'
import Message from './components/Message'

axios.defaults.withCredentials = true

export const useRoutes = () => {
  const { loggedIn, alert } = useContext(AuthContext)
  return (
    <Router>
      <Navbar />
      {alert && <Message message={alert} />}
      <Switch>
        {!loggedIn && (
          <>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn && (
          <>
            <Route exact path="/"><CreatePage /></Route>
            <Route exact path='/users'><Users /></Route>
            <Route exact path='/links'><Links /></Route>
          </>
        )}
      </Switch>
      <Footer />
    </Router>
  )
}

