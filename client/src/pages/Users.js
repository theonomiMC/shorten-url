import React, { useState, useContext } from 'react'
import axios from "axios"
import { AuthContext } from '../context/AuthContext'
import UserTable from '../components/UserTable'
import { Container, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const Users = () => {
    const { baseUrl } = useContext(AuthContext)
    const [users, setUsers] = useState('')
    const classes = useStyles()

    const fetchAllUsers = React.useCallback(async () => {
        try {
            const response = await axios.get(`${baseUrl}/auth`)
            setUsers(response.data)
        } catch (e) {
            console.log(e.message)
        }
    }, [baseUrl])
    React.useEffect(() => {
        fetchAllUsers()
    }, [fetchAllUsers])
    return (
        <Container component="section" className={classes.root}>
            <Typography variant='h5' gutterBottom align='center'>User data </Typography>
            <UserTable users={users} />
        </Container >
    )
}

export default Users