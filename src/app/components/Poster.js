import React, { Component } from 'react';
import { ButtonBase, Fade } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/styles';


const useStyles = theme => createStyles({
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
        background: 'linear-gradient(to right, rgba(87,81,87,1) 0%, rgba(112,112,112,1) 22%, rgba(163,163,163,1) 59%, rgba(204,204,204,1) 100%)',
        animation: 'Gradient 5s ease infinite',
        '@keyframes Gradient': {

        }
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
        const { posterImg, posterTitle } = this.props;
        return(
            <ButtonBase className={classes.root}>
                {(ready) ? (
                    <Fade className={classes.posterPlaceholder}>
                        <img />
                    </Fade>) : null}
                <img src={posterImg} className={classes.posterImg}/>
                <p className={classes.posterTitle}>
                    {posterTitle}
                </p>
            </ButtonBase>
        );
    }
        
}

export default withStyles(useStyles)(Poster);