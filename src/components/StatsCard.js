import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        marginBottom: '30px',
        background: 'lightgray',
        width: 'fit-content',
        alignItems: 'center',
    },
    status: {
        padding: '10px',
        fontWeight: 'bold',
        fontSeize: '20px',
        background: 'white',
        borderRadius: '5px',
        marginLeft: '10px'
    }
}));

function Label({label, children, style}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', ...style}}>
            <span>{label}</span>
            <div>{children}</div>
        </div>
    )
}

function StatsCard(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Label label="Rank" style={{borderRight: '1px solid black', padding: '10px'}}>
                <h1 style={{margin: 0}}>{props.rank}</h1>
            </Label>
            <Label label="Rating" style={{padding: '10px'}}>
                <h3 style={{margin: 0}}>{props.score} / 10</h3>
            </Label>
            <Label label="Popularity" style={{padding: '10px'}}>
                <h3 style={{margin: 0}}>{props.popularity}</h3>
            </Label>
            <div className={classes.status}>
                {(props.airing | props.publishing) ? 'On Going' : 'Complete'}
            </div>
        </div>
    )
}

export default StatsCard;