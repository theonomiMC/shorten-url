import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import LogOut from "../pages/LogOut"
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import { useStyles } from './styles'

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext)
  const classes = useStyles()
  const logOutClass = `${classes.logout} ${classes.navItem}`
  const loggedInClass = `${classes.user} ${classes.navItem}`

  return (
    <>
      <AppBar position="relative" className={classes.nav} color='inherit'>
        <Toolbar>
          {loggedIn && (
            <>
              <div className={logOutClass}>
                <LogOut />
              </div>
              <div className={loggedInClass}>
                {loggedIn}
              </div>
              <div className={classes.navItem}>
                <NavLink to="/users" >Users</NavLink>
              </div>
              <div className={classes.navItem}>
                <NavLink to="/links" >Links</NavLink>
              </div>

            </>
          )}
          <Typography variant="h5" noWrap className={classes.header}>
            <NavLink to="/">Shorten Url</NavLink>
          </Typography>
          <LinkIcon
            fontSize='large'
            color='error'
            className={classes.icon}>
          </LinkIcon>
        </Toolbar>
      </AppBar>
    </>
  )
}


export default Navbar;
