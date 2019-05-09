import React, { Component } from 'react';
import KitsuService from '../services/KitsuService';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Poster from '../components/Poster';
import InfiniteScroll from 'react-infinite-scroller';


const useStyles = (theme) => createStyles({
    root: {
        display: 'flex',
        padding: '10px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    progress: {
        display: 'flex',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class AnimeTVList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animeList: [],
            offset: 0,
            page: 20,
            hasMore: false
        };
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    async fetchMoreData() {
        const page = this.state.page;
        const offset = this.state.offset;
        let response = await KitsuService.Kitsu.getByPage(page, offset);
        let testArray = response.data.data.map((value, index) => ({
            id: index + this.state.offset,
            attributes: value.attributes
        })).map(tValue => ({
            id: tValue.id,
            ...tValue.attributes
        }));
        this.setState({
            animeList: this.state.animeList.concat(testArray),
            page: page,
            offset: offset+page,
            hasMore: true
        });
    }

    render() {
        const animeList = this.state.animeList
        const classes = this.props.classes;
        const loader = (animeList.length !== 0) ? (
            <div className={classes.progress}>
                <CircularProgress key="loader"/>
            </div>
        ) : <LinearProgress className={classes.progress}/>;
        const posters = [];
        animeList.map((poster, index) => {
            posters.push(
                <Poster
                    key={`poster-${index}`}
                    id={index}
                    posterTitle={poster.canonicalTitle} 
                    posterImg={poster.posterImage.large}/>
            );
        });
        return(
            <React.Fragment>
                {animeList.length === 0 &&
                    loader
                }
                <InfiniteScroll
                    className={classes.root} 
                    pageStart={0}
                    loadMore={this.fetchMoreData.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={loader}>
                        {posters}    
                </InfiniteScroll>
            </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(AnimeTVList);