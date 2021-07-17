import { TextField } from '@material-ui/core'
import { useStyles } from './styles'

const Input = ({ handleValue, value, ...rest }) => {
    const classes = useStyles()
    return (
        <TextField
            onChange={handleValue}
            value={value}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            className={classes.input}
            InputProps={{ classes: { notchedOutline: classes.focused } }}
            InputLabelProps={{ shrink: true }}
            {...rest}
        />

    )
}

export default Input