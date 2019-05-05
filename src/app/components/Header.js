import React, { Component } from 'react';
import { makeStyles, fade, withStyles, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, ButtonBase } from '@material-ui/core/';
import Navigation from './Navigation';

const debugTheme = makeStyles(theme => console.log(theme));

const useStyles = (theme) => createStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    appBar: {
        boxShadow: 'none'
    },
    subNavigationBar: {
        display: 'none',
        flexDirection: 'row',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        }
    },
    subMenuItem: {
        margin: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    subMenuItemDescription: {
        marginTop: theme.spacing(4),
    }
});


const animeSubMenu = [
    {icon: 'fas fa-tv', description: 'TV'}, 
    {icon: 'fas fa-film', description: 'Movie'}, 
    {icon: 'fas fa-users', description: 'New Releases'}, 
    {icon: 'far fa-clock', description: 'Upcoming'}
];

class Header extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        // debugTheme();
        const classes = this.props.classes;
        console.log(classes.subMenuItem);
        return(
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Navigation />
                    <Toolbar className={classes.subNavigationBar}>
                        {animeSubMenu.map((value, index) => {
                                return(
                                    <ButtonBase key={index} className={classes.subMenuItem}>
                                        <i className={value.icon}></i>
                                        <Typography 
                                            key={index}
                                            className={classes.subMenuItemDescription}
                                            noWrap>
                                            {value.description}
                                        </Typography>
                                    </ButtonBase>  
                                );
                            })
                        }      
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(useStyles)(Header);