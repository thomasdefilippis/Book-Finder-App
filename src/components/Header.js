import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root:{
        backgroundColor: '#2E4272',
        height: 'auto',
        width: " 70%",
        margin: '0 auto',
        borderRadius: '0% 0% 25% 25%'
    },

    toolbar:{
        textAlign: 'center'
    },

    typographyStyles:{
        margin: "0 auto",
        fontSize: '80px',
        color: 'white',
        fontFamily: "Sabon"
    }
}));
  
const Header = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.typographyStyles}>
                        Book Finder
                    </Typography>
                </Toolbar>            
            </AppBar>
        </div>

    )
}

export default Header;