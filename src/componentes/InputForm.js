import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export const InputForm = () => {
  const classes = useStyles();
  const [valorInput, setValorInput] = useState();
  
  const handleInputChange = (e) => {
    setValorInput(e.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField onChange={handleInputChange} value={valorInput} id="standard-basic" label="Search" />      
    </form>
  )
}
