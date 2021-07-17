import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(12, 4),
        maxWidth: 800,
        minHeight: '40vh',
        height:'100%',
        "& button": {
            "&:hover": {
                color: '#000',
            }
        }
    },
    nested: {
        maxWidth: 400,
    },
    card: {
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #dcedc8',
        borderRadius: '5px',
        textAlign: 'center',
    },
    icon: {
        padding: theme.spacing(2, 0),
        position: 'absolute',
        bottom: 12,
        left: 12,

    },
    title: {
        padding: theme.spacing(2),
    },
    featureList: {
        padding: theme.spacing(2),
        fontSize: '1.2rem'
    },
    form: {
        '& > *': {
            margin: theme.spacing(1, 'auto'),
        },
        '& a': {
            color: '#212121'
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: theme.spacing(1.5, 0),
        backgroundColor: '#f44336',
        letterSpacing: '2px',
        fontSize: '1rem',
        color: '#fff',
        "&:hover": {
            color: '#000',
        }
    },
    reg: {
        backgroundColor: '#4d13d1',

    },
    paper2: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    shorten: {
        marginRight: theme.spacing(1),
        backgroundColor: '#00b16a',
        color: 'white'
    },
    contentWrapper: {
        margin: '40px 16px',
        "& > *": {
            wordBreak: 'break-word'
        }
    },

}))

