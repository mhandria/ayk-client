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
                ...res.data,
                summaryCardInfo: {
                    type: res.data.type,
                    media: res.data.source,
                    episode: res.data.episodes,
                    broadcast: res.data.broadcast,
                    rating: (res.data.rating !== undefined) ? res.data.rating.split('-')[0]: undefined,
                    premiered: res.data.premiered,
                    aired: res.data.aired,
                    published: res.data.published,
                    chapters: res.data.chapters,
                }
            }))
            .then(() => {
                this._mounted = true;
                const buffer = new Image();
                buffer.onload = () => this._mounted && this.setState({imgRdy: true});
                buffer.src = this.state.image_url;
            });
    }
    
    render() {
        const classes = this.props.classes;
        return(
            <div className={classes.root}>
                <h1 style={{borderBottom: '1px solid lightgray', width: '100%'}}>{this.state.title}</h1>
                <div className={classes.detailContainer}>
                    <SummaryCard {...this.state} info={this.state.summaryCardInfo}/>
                    <div className={classes.detailContent}>
                        <StatsCard {...this.state} />
                        {this.state.trailer_url && 
                            <React.Fragment>
                                <h3 style={{margin: 0,  borderBottom: '1px solid lightgray', width: '100%'}}>Trailer</h3>
                                <iframe 
                                    title="trailer"
                                    width="100%"
                                    height="500"
                                    style={{padding: '10px', border: 'none'}}
                                    src={this.state.trailer_url}>
                                </iframe>
                            </React.Fragment>
                        }
                        <h3 style={{margin: 0,  borderBottom: '1px solid lightgray', width: '100%'}}>Synopsis</h3>
                        <p>{this.state.synopsis}</p>
                        <h3 style={{margin: 0,  borderBottom: '1px solid lightgray', width: '100%'}}>Background</h3>
                        <p>{this.state.background}</p>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default (withStyles(useStyle))(MediaDetailPage);