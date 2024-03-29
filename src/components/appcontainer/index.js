import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import Listado from '../listado';

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

  const handleInputChange = (e) => {
    setMyText(e.target.value)
  }

  const handleButton = () => {
    let newList = listado.slice(0)
    if(myText !== ""){
      newList.push(myText)
      if (newList.length > 6) {
        alert("LISTA LLENA")
      } else {
        setListado(newList)
        setMyText("")
      }
    }else{
      alert("NO HAY TEXTO")
    }
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
        <Listado listado={listado} />
      </Container>
    </React.Fragment>
  );
}
