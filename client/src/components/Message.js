import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { useStyles } from './styles'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Message = ({ message }) => {
  const classes = useStyles();

  return (
    <div className={classes.alert}>
      <Snackbar autoHideDuration={3000} open={true} >
        <Alert severity="error" >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default Message