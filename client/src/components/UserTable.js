import React from 'react'
import {
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    Paper,

} from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { useStyles } from './styles'

const Row = ({ user }) => {
    const [open, setOpen] = React.useState(false)
    const classes = useStyles()

    if (!user) {
        return <Typography variant='h4'>No Links</Typography>
    }
    return <React.Fragment>
        <TableRow className={classes.table} >
            <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell component="td" scope="row">{user.email}</TableCell>

        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                            Links
                        </Typography>
                        <Table size="small" aria-label="users">
                            <TableBody>
                                {user.links.length > 0 && user.links.map((link, i) => (
                                    <TableRow key={i}>
                                        <TableCell scope="row">
                                            <a href={link} target='_blank' rel='noreferrer'>{link ?? null}</a>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>
}



const UserTable = React.memo(({ users }) => {
    if (!users.length) {
        return <h3>There's no link yet</h3>
    }
    return <TableContainer component={Paper}>
        <Table aria-label="collapsible table">

            <TableBody>
                {users.map((user) => (
                    <Row key={user._id} user={user} />
                ))}
            </TableBody>
        </Table>
    </TableContainer>
})

export default UserTable