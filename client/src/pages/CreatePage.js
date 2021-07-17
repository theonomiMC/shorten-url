import React, { useState, useContext } from 'react'
import axios from "axios"
import { AuthContext } from '../context/AuthContext'
import LinkCard from '../components/LinkCard'
import { Button, Grid, Container, TextField, Paper, AppBar, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useStyles } from "./styles"

const CreatePage = () => {
    const { baseUrl } = useContext(AuthContext)
    const classes = useStyles()
    const [link, setLink] = useState('')
    const [result, setResult] = useState({})
    // eslint-disable-next-line
    const [linkData, setLinkData] = useState([])

    const handleLink = async (e) => {
        e.preventDefault();
        try {
            const payload = { from: link }
            const { data } = await axios.post(`${baseUrl}/create`, payload)
            setResult(data.link)
        } catch (e) {
            console.log(e.message)
        }
        setLink('')
    }
    const fetchAllLinks = async () => {
        try {
            const fetched = await axios.get(`${baseUrl}/create`)
            const { links } = fetched.data
            setLinkData(links)
        } catch (e) {
            console.log(e.message)
        }
    }
    React.useEffect(() => {
        fetchAllLinks()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container component="section" className={classes.root}>
            <Paper className={classes.paper}>
                <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center" >
                            <Grid item>
                                <SearchIcon className={classes.block} color="inherit" />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    onChange={e => setLink(e.target.value)}
                                    value={link}
                                    id="link"
                                    type="url"
                                    placeholder="Enter url ..."
                                    InputProps={{
                                        disableUnderline: true,
                                        className: classes.searchInput,
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={handleLink}
                                    variant="contained"
                                    className={classes.shorten}
                                    type="submit">
                                    shorten
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div className={classes.contentWrapper}>
                    <LinkCard link={result} />
                </div>
            </Paper>
        </Container>

    )
}

export default CreatePage