import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function FixedContainer() {

  const [listado, setListado] = useState([])
  const [myText, setMyText] = useState("")

  const classes = useStyles();

  console.log('myText: ', myText)
  console.log('listado: ', listado)

  const handleInputChange = (e) => {
    setMyText(e.target.value)
  }

  const handleButton = () => {
    let newList = listado.slice(0)
    newList.push(myText)
    setListado(newList)
    setMyText("")
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Input
          placeholder="Insert some text here"
          className={classes.input}
          inputProps={{
            'aria-label': 'description',
          }}
          value={myText}
          onChange={handleInputChange}
        />
        <Button variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleButton}>
          Agregar
        </Button>
        <Typography variant="h1" component="h2"> {listado} </Typography>
      </Container>
    </React.Fragment>
  );
}
