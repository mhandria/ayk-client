import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

const debugTheme = makeStyles(theme => console.log(theme));
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    appBar: {
        boxShadow: 'none'
    },
    menu: {
        dispaly: 'none',
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
    subNavigationBar: {
        display: 'none',
        flexDirection: 'row',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        }
    },
    title: {
        display: 'none',
        margin: '0px',
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
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            color: 'white',
            marginLeft: '10px',
            marginRight: '10px'
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

const menu = ['Anime', 'Manga', 'New Releases'];
const animeSubMenu = [
    {icon: 'fas fa-tv', description: 'TV'}, 
    {icon: 'fas fa-film', description: 'Movie'}, 
    {icon: 'fas fa-users', description: 'New Releases'}, 
    {icon: 'far fa-clock', description: 'Upcoming'}
];
const Header = () => {
    // debugTheme();
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar color="primary" className={classes.bar}>
                    <div className={classes.navigationBar}>
                        <div className={classes.menu}>
                            <Typography className={classes.title} variant="h4" noWrap>
                                AnimeYouKnow
                            </Typography>
                            {menu.map((menu, index) => {
                                return(
                                <Button key={index} className={classes.menuItem} variant="h6" noWrap>
                                    {menu}
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
                    <div className={classes.subNavigationBar}>
                        {animeSubMenu.map((value, index) => {
                            return(
                                <div className={classes.subMenuItem}>
                                    <i className={value.icon}></i>
                                    <Typography 
                                        key={index}
                                        className={classes.subMenuItemDescription}
                                        variant="p" 
                                        noWrap>
                                        {value.description}
                                    </Typography>
                                </div>  
                            );
                        })
                        }      
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;