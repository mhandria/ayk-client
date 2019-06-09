import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        background: 'lightgray',
        borderRadius: '5px',
        padding: '10px',
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    sectionTitle: {
        width: '100%',
        borderBottom: '1px solid black',
    },
    sectionContent: {
        margin: 0,
        width: '100%',
    },
    summaryImg: {
        width: 'fit-content',
    },
    posterPlaceholder: {
        width: '225px',
        height: '316px',
        position: 'absolute',
        top: theme.spacing(1),
        zIndex: 1
    },
}));

function SummaryCard(props){
    const classes = useStyle();
    console.log(props);
    return(
        <div 
            className={classes.root} 
            style={(!props.imgRdy) ? {minHeight: '316px', minWidth: '225px'} :  null}>
            {(!props.imgRdy) ? (
                <img className={`${classes.posterPlaceholder} animate-loading`}/> 
            ): null}
            <img
                className={classes.summaryImg} 
                src={props.image_url} 
                alt={props.title} />
            <h3 className={classes.sectionTitle}>
                Information
            </h3>
            <p className={classes.sectionContent}>
                    <span>type:</span> {props.type}
            </p>
            <p className={classes.sectionContent}>
                    <span>type:</span> {props.type}
            </p>
        </div>
    )
}


export default SummaryCard;