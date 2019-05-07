import React from 'react';
import { ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const posterStyle = makeStyles(theme => ({
    root: {
        width: 'fit-content',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(3),
        padding: theme.spacing(1)
    },
    posterImg: {
        height: '205.97px',
        borderRadius: '5px',
        boxShadow: '0 5px 9px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        '&:hover': {
            boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
        },
    },
    posterTitle: {
        display: 'block',
        textOverflow: 'ellipsis',
        width: '146px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        fontFamily: theme.typography.fontFamily,
        fontWeight: 'bold'

    }
}))

const Poster = (props) => {
    const classes = posterStyle();
    return(
        <ButtonBase className={classes.root}>
            <img src={props.posterImg} className={classes.posterImg}/>
            <p className={classes.posterTitle}>
                {props.posterTitle}, {props.id}
            </p>
        </ButtonBase>
    )
}

export default Poster;