import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const LogOut = () => {
  const { getLoggedIn, baseUrl } = useContext(AuthContext)
  const history = useHistory()

  const logOut = async () => {
    await axios.get(`${baseUrl}/auth/logout`);
    await getLoggedIn();
    history.push("/");
  }

  return <ArrowBackIcon
    color='error'
    fontSize='large'
    onClick={logOut}>
    Log out
  </ArrowBackIcon>


}

export default LogOut
