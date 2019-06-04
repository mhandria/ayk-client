import React, { Component } from 'react';
import { ButtonBase  } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/styles';


const useStyles = theme => ({
    root: {
        position: 'relative',
        width: 'fit-content',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(3),
        padding: theme.spacing(1),
        flex: '1 1 15%'
    },
    posterPlaceholder: {
        width: '146px',
        height: '205.97px',
        position: 'absolute',
        top: theme.spacing(1),
        borderRadius: '5px',
        zIndex: 10
    },
    posterImg: {
        height: '205.97px',
        maxWidth: '140px',
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
    },
    '@-webkit-keyframes gradient': {
        '0%': {
            backgroundPosition: '0% 50%'
        },
        '50%': {
            backgroundPosition: '100% 50%'
        },
        '100%': {
            backgroundPosition: '0% 50%'
        }
    },
    '@keyframes gradient': {
        '0%': {
            backgroundPosition: '0% 50%'
        },
        '50%': {
            backgroundPosition: '100% 50%'
        },
        '100%': {
            backgroundPosition: '0% 50%'
        }
    }
});

class Poster extends Component {
    _mounted = false;
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
    }

    componentWillMount() {
        this._mounted = true;
        const buffer = new Image();
        buffer.onload = () => this._mounted && this.setState({ready: true});
        buffer.src = this.props.posterImg;
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        const classes = this.props.classes;
        const { ready } = this.state;
        const { posterImg, posterTitle, rank } = this.props;
        return(
            <ButtonBase className={classes.root}>
                {(!ready) ? (
                        <img className={`${classes.posterPlaceholder} animate-loading`} />) : null}
                <img src={posterImg} className={classes.posterImg}/>
                <p className={classes.posterTitle}>
                    {rank}. {posterTitle}
                </p>
            </ButtonBase>
        );
    }
        
}

export default withStyles(useStyles)(Poster);