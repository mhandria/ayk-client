import React, { Component } from 'react';
import { ButtonBase  } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';


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
    posterContainer: {
        textDecoration: 'none', 
        color: 'gray',
        '&:hover': {
            color: 'black'
        }
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
            <Link 
                to={`/${this.props.media}/${this.props.filter}/${this.props.id}`} 
                className={classes.posterContainer}>
                <ButtonBase className={classes.root}>
                    {(!ready) ? (
                            <img className={`${classes.posterPlaceholder} animate-loading`} />) : null}
                    <img 
                        src={posterImg} 
                        className={classes.posterImg}
                        alt={posterTitle} />
                    <p className={classes.posterTitle}>
                        {rank}. {posterTitle}
                    </p>
                </ButtonBase>
            </Link>
        );
    }
        
}

export default withStyles(useStyles)(Poster);