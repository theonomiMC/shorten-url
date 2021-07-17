import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { useStyles } from './styles'

const Footer = () => {
    const classes = useStyles()
    const footerClass = `${classes.root} ${classes.footer}`
    return (
        <footer className={footerClass}>
            <Typography variant="body1">
                Developed by
                <Link color="inherit" href="https://www.linkedin.com/in/nataliabakakuri/" target="_blank">
                    {' '}Natalia Bakakuri
                </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {' © '}UrlShortener {new Date().getFullYear()}
            </Typography>
        </footer>


    );
}

export default Footer