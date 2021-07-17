import React, { useContext, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { Button, Grid, CssBaseline, Typography, Container } from '@material-ui/core'
import Input from '../components/Input'
import { useStyles } from './styles'

const Login = () => {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const { getLoggedIn, setAlert, baseUrl } = useContext(AuthContext)

    const handleLogin = (async (e) => {
        e.preventDefault()
        const loginData = { email, password }
        await axios.post(`${baseUrl}/auth/login`, loginData)
            .then(() => history.push('/'))
            .catch(error => setAlert(error.response?.data.message))
        await getLoggedIn()
    })
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
                    Log in
                </Typography>
                <form className={classes.form} onSubmit={handleLogin}>
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >Log In </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link to="/register">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container >
    )
}

export default Login