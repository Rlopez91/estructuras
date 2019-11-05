import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const MyList = (listado) => {
    if (listado.length > 0) {
        return listado.map((item, ind) => {
            return <ListItem button key={ind}>
                <ListItemText primary={ind+1+" - "+item} />
            </ListItem>
        })
    }else{
        return <ListItem button >
                <ListItemText primary="Listado vacío" />
            </ListItem>
    }
}

export default function Listado(props) {
    const classes = useStyles();
    const listado = props.listado
    const MyList2 = MyList(listado)
    
    return (
        <div className={classes.root}>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                {MyList2}
            </List>
        </div>
    );
}
