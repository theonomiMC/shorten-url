import React from 'react'
import {
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,

} from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { useStyles } from './styles'

const Row = ({ linkItem }) => {
    const [open, setOpen] = React.useState(false)
    const classes = useStyles()
    const { from, to, visited, visitors } = linkItem


    if (!linkItem) {
        return <Typography variant='h4'>No Links</Typography>
    }
    return <React.Fragment>
        <TableRow className={classes.table}>
            <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">{from}</TableCell>
            <TableCell align="right"><a href={to} target='_blank' rel='noreferrer'>{to}</a></TableCell>
            <TableCell align="right">{visited}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                            Visitors
                        </Typography>
                        <Table size="small" aria-label="visitors">
                            <TableBody>
                                {visitors.length > 0 && visitors.map((user, i) => (
                                    <TableRow key={i}>
                                        <TableCell scope="row">{user}</TableCell>
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



const LinkTable = React.memo(({ linkData }) => {

    return <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>Url</TableCell>
                    <TableCell align="right">Shorten Url</TableCell>
                    <TableCell align="right">Visited</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {linkData && linkData.map((linkItem) => (
                    <Row key={linkItem._id} linkItem={linkItem} />
                ))}
            </TableBody>
        </Table>
    </TableContainer>
})

export default LinkTable