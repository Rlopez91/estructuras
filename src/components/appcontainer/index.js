import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
}));

export default function FixedContainer() {

  const [listado, setListado] = useState([])
  const [myText, setMyText] = useState("")

  const classes = useStyles();

  console.log('myText: ', myText)

  const handleChange = (e) => {
    setMyText(e.target.value)
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
          onChange={handleChange}
        />
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <Typography variant="h1" component="h2">   h1. Heading </Typography>
      </Container>
    </React.Fragment>
  );
}
