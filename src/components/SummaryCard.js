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
        height: 'fit-content',
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
    genre: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px'
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
    if(props.summaryCardInfo === undefined) {
        return (
            <div></div>
        );
    }
    if(props.summaryCardInfo.aired !== undefined ){
        props.summaryCardInfo.aired = props.summaryCardInfo.aired.string;
    } else if(props.summaryCardInfo.published !== undefined) {
        props.summaryCardInfo.published = props.summaryCardInfo.published.string;
    }
    let info = [];
    for(let property in props.summaryCardInfo) {
        if(props.summaryCardInfo[property] === undefined || props.summaryCardInfo[property] === null) {
            continue;
        }
        info.push(
            <p 
                style={{display: 'flex'}}
                className={classes.sectionContent} 
                key={property}>
                    <span style={{flex: 1}}>{property}:</span>
                    <span style={{flex: 1}}>
                        {props.summaryCardInfo[property]}
                    </span>
            </p>
        )
    }

    return(
        <div 
            className={classes.root} 
            style={(!props.imgRdy) ? {minHeight: '316px', minWidth: '225px'} :  null}>
            {(!props.imgRdy) ? (
                <img className={`${classes.posterPlaceholder} animate-loading`}/> 
            ): null}
            <div style={{width: '100%', justifyContent: 'center', display: 'flex'}}>
                <img
                    className={classes.summaryImg} 
                    src={props.image_url} 
                    alt={props.title} />
            </div>
            {props.genres &&
                <div className={classes.genre}>
                    <h5 style={{margin: 0}}>Genre</h5>
                    <div style={{display: 'flex', flexWrap: 'wrap',}}>
                        {props.genres.map((value, index) => 
                            (
                                <p 
                                    key={`genre-${index}`}
                                    style={{
                                        margin: 0, 
                                        padding: '2px',
                                        fontSize: '11px',
                                        borderRadius: '5px',
                                        background: 'white',
                                        margin: '5px',
                                    }}>
                                    {value.name}
                                </p>
                            )
                        )}
                    </div>
                </div>
            }
            <h3 className={classes.sectionTitle}>
                Information
            </h3>
            {info}
        </div>
    )
}


export default SummaryCard;