import { makeStyles } from "@material-ui/core/"

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '70%'
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    width: '100%',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  nav: {
    flexGrow: 1,
    backgroundColor: '#f2f2f2',
    '& a': {
      color: '#505050',
      fontWeight: 600
    }
  },
  logout: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  navItem: {
    marginRight: theme.spacing(2),
    textTransform: 'uppercase',
    fontSize: '1.1rem',
  },
  user: {
    color: '#505050',
    textTransform: 'lowercase',
    fontStyle: 'italic'
  },
  header: {
    marginLeft: theme.spacing(2),
    textShadow: '1px 1px 1px #ddd',
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
  input: {
    "& .Mui-focused": {
      color: "#000",
      borderColor: '#000',
    },
  },
  focused: {
    borderWidth: "1px",
    borderColor: "#505050 !important",
  },
  btn: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5, 0),
    letterSpacing: '2px',
    fontSize: '1rem',
    "&:hover": {
      color: '#000',
    }
  },
  login: {
    backgroundColor: '#f44336',
    color: '#fff',

  },
  register: {
    backgroundColor: '#4d13d1',
    color: '#fff',
  },

  table: {
    maxWidth: 700,
    '& > *': {
      borderBottom: 'unset',
      wordBreak: 'break-word'
    },
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))
