import React, { useContext, useState } from "react"
import axios from "axios"
import { AuthContext } from '../context/AuthContext'
import { useHistory, Link } from "react-router-dom"
import { Button, Grid, CssBaseline, Typography, Container } from '@material-ui/core'
import Input from '../components/Input'
import { useStyles } from './styles'

const Register = () => {
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const { getLoggedIn, setAlert, alert, baseUrl } = useContext(AuthContext)
  const history = useHistory()

  async function register(e) {
    e.preventDefault();
    const payload = {
      email,
      password,
      repeatPassword
    };
    await axios.post(`${baseUrl}/auth`, payload)
      .then(() => history.push('/'))
      .catch(error => setAlert(error.response?.data.message))

    await getLoggedIn()
  }
  React.useEffect(() => {
    const timeId = setInterval(() => {
      setAlert('')
    }, 5000);
    return () => {
      clearInterval(timeId)
    }
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" gutterBottom>
          Register a new account
        </Typography>
        <form className={classes.form} onSubmit={register}>
          <Input
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            handleValue={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <Input
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            handleValue={(e) => setPassword(e.target.value)}
          />
          <Input
            name="repeat password"
            label="Repeat Password"
            type="password"
            id="repeat password"
            autoComplete="current-password"
            value={repeatPassword}
            handleValue={(e) => setRepeatPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={`${classes.submit} ${classes.reg}`}
          >Register </Button>
          <Grid container justifyContent="flex-end" >
            <Grid item style={{ marginBottom: '2.5rem' }}>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container >
  )
}

export default Register