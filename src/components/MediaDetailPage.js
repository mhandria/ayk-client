import React, { Component } from 'react';
import SummaryCard from './SummaryCard';
import StatsCard from './StatsCard';
import { fetchMediaDetail } from '../middleware/api';
import { createStyles, withStyles } from '@material-ui/core/styles';

const useStyle = (theme) => createStyles({
    root: {
        display: 'flex',
        padding: '10px',
        flexWrap: 'wrap',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
        }
    },
    detailContainer: {
        display: 'flex', 
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
    detailContent: {
        display: 'flex', 
        padding: '20px', 
        flexDirection: 'column',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
            marginTop: '10px',
            alignItems: 'center',
        }
    },
    statsCard: {
        background: 'lightgray',
        borderRadius: '5px',
        padding: '5px',
    }
});
class MediaDetailPage extends Component {
    _mounted = false;

    constructor(props) {
        super(props);
        this.state = {
            imgRdy: false,
        };
    }

    componentWillMount() {
        fetchMediaDetail(this.props.match.params.id, this.props.match.params.media)
            .then( res => this.setState({
                ...res.data
            }))
            .then(() => {
                this._mounted = true;
                const buffer = new Image();
                buffer.onload = () => this._mounted && this.setState({imgRdy: true});
                buffer.src = this.state.image_url;
            });
    }
    
    render() {
        console.log(this.state);
        const classes = this.props.classes;
        return(
            <div className={classes.root}>
                <h1 style={{borderBottom: '1px solid lightgray', width: '100%'}}>{this.state.title}</h1>
                <div className={classes.detailContainer}>
                    <SummaryCard {...this.state} />
                    <div className={classes.detailContent}>
                        <StatsCard {...this.state} />
                        <h3 style={{margin: 0,  borderBottom: '1px solid lightgray', width: '100%'}}>Synopsis</h3>
                        <p>{this.state.synopsis}</p>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default (withStyles(useStyle))(MediaDetailPage);