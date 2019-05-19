import React, { Component } from 'react';
import { makeStyles, fade, withStyles, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, ButtonBase } from '@material-ui/core/';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

const useStyles = (theme) => createStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    appBar: {
        boxShadow: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(to top, rgb(97, 67, 133), rgb(81, 99, 149))`,
    },
    subNavigationBar: {
        display: 'none',
        flexDirection: 'row',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        }
    },
    subMenuItem: {
        textDecoration: 'none',
        color: 'white',
        marginBottom: '5px'
    },
    subMenuItemButton: {
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        borderRadius: theme.spacing(2),
        width: '100px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    icon: {
        fontSize: '20px'
    },
    subMenuItemDescription: {
        marginTop: theme.spacing(4),
        fontSize: '8px'
    }
});


const animeSubMenu = [
    {icon: 'fas fa-tv', description: 'TV', route: '/anime'}, 
    {icon: 'fas fa-film', description: 'Movie', route: '/movie'}, 
    {icon: 'fas fa-users', description: 'New Releases', route: '/new-release'}, 
    {icon: 'far fa-clock', description: 'Upcoming', route: '/upcoming'}
];

class Header extends Component { 
    constructor(props) {
        super(props);
    }


    //TODO: make dispatch for bottom NavLink instead of NavLink route. 
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
                                    <NavLink 
                                        key={`navLink-${index}`}
                                        to={value.route}
                                        activeStyle={{borderBottom: '5px solid #90EE90', marginBottom: '0px'}}
                                        className={classes.subMenuItem}>
                                        <ButtonBase key={index} className={classes.subMenuItemButton}>
                                            <i className={`${value.icon} ${classes.icon}`}></i>
                                            <Typography 
                                                key={index}
                                                className={classes.subMenuItemDescription}
                                                noWrap>
                                                {value.description}
                                            </Typography>
                                        </ButtonBase>  
                                    </NavLink>
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