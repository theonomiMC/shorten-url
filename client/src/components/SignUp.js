import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Typography, CssBaseline, Container, Grid } from '@material-ui/core'
import { useStyles } from './styles'

export default function SignUp() {
    const classes = useStyles()
    const history = useHistory()

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Shorten Url
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            ShortURL is a url shortener to reduce a long link.
                            Use my tool to shorten links.
                            You can also find info about other users' shorten urls.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" className={classes.login} onClick={() => history.push('/login')}>
                                        Log in
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" className={classes.register} onClick={() => history.push('/register')}>
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

            </main>
        </React.Fragment>
    );
}