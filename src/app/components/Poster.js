import React from 'react';
import { Typography, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const posterStyle = makeStyles(theme => ({
    root: {
        width: 'fit-content',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        width: '195px',
        height: '300px',
        margin: theme.spacing(2)
    },
    posterImg: {
        height: '277px',
        borderRadius: theme.spacing(2)
    },
    posterTitle: {
        display: 'flex',
    }
}))

const Poster = (props) => {
    const classes = posterStyle();
    return(
        <ButtonBase className={classes.root}>
            <img src={props.posterImg} className={classes.posterImg}/>
            <p className={classes.posterTitle}>
                {props.posterTitle}
            </p>
        </ButtonBase>
    )
}

export default Poster;