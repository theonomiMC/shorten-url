import React, { useState, useContext } from 'react'
import axios from "axios"
import { AuthContext } from '../context/AuthContext'
import { Typography, Container } from '@material-ui/core'
import LinkTable from '../components/LinkTable'
import { useStyles } from './styles'

const Links = () => {
    const { baseUrl } = useContext(AuthContext)
    const [linkData, setLinkData] = useState('')
    const classes = useStyles()
    const fetchAllLinks = React.useCallback(async () => {
        try {
            const fetched = await axios.get(`${baseUrl}/links`)
            setLinkData(fetched.data)
        } catch (e) {
            console.log(e.message)
        }
    }, [baseUrl])
    React.useEffect(() => {
        fetchAllLinks()
    }, [fetchAllLinks])

    return (
        <Container component="section" className={classes.root}>
            {linkData.length ? (
                <>
                    <Typography variant='h5' gutterBottom align='center'>Link data </Typography>
                    <LinkTable linkData={linkData} />
                </>
            ) :
                <Typography variant='h4' align='center'>There's no link yet</Typography>}
        </Container >
    )
}

export default Links