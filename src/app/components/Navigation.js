import React from 'react';
import {Toolbar, Typography, Button, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, fade, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const navStyles = makeStyles(theme => ({
    menu: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexGrow: 1
        }
    },
    bar: {
        display: 'flex',
        flexDirection: 'column'
    },
    navigationBar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing(1),
            borderBottom: '1px solid white'
        }
    },
    title: {
        display: 'none',
        margin: '0px',
        textDecoration: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            color: theme.props.logo.color,
            fontFamily: "'Righteous', cursive",
            marginRight: theme.spacing(7)
        },
    },
    menuItem: {
        display: 'none',
        margin: '0px',
        cursor: 'pointer',
        textDecoration: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            color: 'white',
            marginLeft: '10px',
            marginRight: '10px'
        }
    },
    menuItemSelected: {
        color: theme.props.logo.color
    },
    search: {
        flexGrow: 1
    },
    searchField: {
        borderRadius: theme.shape.borderRadius,
        width: '100%',
        float: 'right',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'fit-content'
        }
    },
    searchIcon: {
        width: theme.spacing(5),
        height: '100%',
        display: 'flex',
        pointerEvents: 'none',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '200px',
            '&:focus': {
                width: '400px'
            }
        }
    }
}));

const Navigation = () => {
    const routes = ['/anime', '/manga'];
    const classes = navStyles();
    const theme = useTheme();
    return(
        <Toolbar color="primary" className={classes.bar}>
            <div className={classes.navigationBar}>
                <div className={classes.menu}>
                    <Typography variant="h4" noWrap>
                        <NavLink 
                            className={classes.title} 
                            to="/anime"> 
                            AnimeYouKnow 
                        </NavLink>
                    </Typography>
                    {routes.map((route, index) => {
                        return(
                        <Button key={index} >
                            <NavLink 
                                to={route}
                                activeStyle={{color: theme.props.logo.color}}
                                className={classes.menuItem}>
                                {route.slice(1)}
                            </NavLink>
                        </Button>);
                    })}
                </div>
                <div className={classes.search}>
                    <div className={classes.searchField}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }} />
                    </div>
                </div>
            </div>
        </Toolbar>
    )
};

export default Navigation;