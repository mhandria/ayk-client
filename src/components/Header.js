import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase, Menu, MenuItem } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    toolBar: {
        display: 'none',
        flexDirection: 'row',
        padding: '5px',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    logo: {
        margin: 0,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        fontFamily: "'Righteous', cursive",
        [theme.breakpoints.up('md')]: {
            flex: 1,
        }
    },
    navLinks: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flex: 1,
        }
    },
    navLink: {
        margin: 0,
        cursor: 'pointer',
    },
    settings: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flex: 1,
        }
    },
    setting: {
        border: '1px solid lightgray',
    },
    
    mbToolBar: {
        display: 'none',
        flexDirection: 'row',
        padding: '5px',
        alignContent: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        }
    },
    mbLogo: {
        display: 'flex',
        margin: 0,
        cursor: 'pointer',
        fontFamily: "'Righteous', cursive",
    },
    menuIcon: {
        display: 'flex',
        alignItems: 'center',
        padding: '5px',
        flex: 1,
        justifyContent: 'flex-end',
        cursor: 'pointer',
    },
    menuList: {
        top: '10px !important',
        right: '10px',
        left: 'auto !important',
    }
}));

const buttonStyle = makeStyles({
    button: {
        display: 'flex',
        padding: '10px',
        height: 'fit-content',
        borderRadius: '5px'
    },
    active: {
        border: '1px solid black',
    }
})



function HeaderButton(props) {
    const classes = buttonStyle();
    const buttonClass = `${classes.button} ${props.className}`
    if(props.to !== undefined) {
        return(
            <NavLink
                to={`/${props.to}`}
                style={{textDecoration: 'none', color: 'black'}}
                activeStyle={{
                    border: '1px solid black', 
                    borderRadius: '5px'
                }}>
                <ButtonBase 
                    className={buttonClass}>
                    {props.children}
                </ButtonBase>
            </NavLink>
                
        );
    } else {
        return(
            <ButtonBase className={buttonClass} style={{marginLeft: '5px'}}>
                {props.children}
            </ButtonBase>
        );
    }
        
}


const navOptions = ['Anime', 'Manga']

function Header(props) { 
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.toolBar}>
                <NavLink 
                    to="/anime"
                    className={classes.logo}
                    style={{textDecoration: 'none', color: 'black'}}>
                    <h1>AnimeYouKnow</h1>
                </NavLink>  
                <div className={classes.navLinks}>
                    {navOptions.map((value) => (
                        <HeaderButton 
                            key={value}
                            to={value.toLowerCase()}
                            className={classes.navLink}>
                            <h4 style={{margin: 0}}>{value}</h4>
                        </HeaderButton>
                    ))}
                </div>
                <div className={classes.settings}>
                    {/* <HeaderButton className={classes.setting}>
                        Login
                    </HeaderButton>
                    <HeaderButton className={classes.setting}>
                        SignUp
                    </HeaderButton> */}
                </div>
            </div>
            <div className={classes.mbToolBar}>
                <div style={{flex: 1}}></div>
                <NavLink 
                    to="/anime"
                    className={classes.mbLogo}
                    style={{textDecoration: 'none', color: 'black'}}>
                    <h1>AnimeYouKnow</h1>
                </NavLink> 
                <i 
                    aria-controls="main-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    style={{cursor: 'pointer'}}
                    className={`${classes.menuIcon} fas fa-ellipsis-v`}></i>
                <Menu
                    id="main-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    classes={{
                        paper: classes.menuList,
                        // list: classes.menuList,
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                        {navOptions.map(value => (
                                <MenuItem>
                                    <NavLink
                                        onClick={handleClose} 
                                        style={{textDecoration: 'none', color: 'black'}}
                                        to={`/${value}`}>{value}</NavLink>
                                </MenuItem>
                        ))}
                </Menu>
            </div>
        </div>
    );
}


export default Header;