import React, { Component } from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Poster from './Poster';
import InfiniteScroll from 'react-infinite-scroller';

import { connect } from 'react-redux';

import { fetchTopMediaList } from '../middleware/api';

const useStyles = () => createStyles({
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class MediaList extends Component {
    handleLoadMore() {
        const params = Object.assign({}, this.props.params, {
            page: this.props.params.page+1,
        })
        this.props
            .loadMoreMedia(params, this.props.hasMore);
    }

    render() {
        const mediaList = this.props.mediaList
        const classes = this.props.classes;
        const { media, filter } = this.props.params;
        const loader = (mediaList.length !== 0) ? (
            <div key="loader" className={classes.progress}>
                <CircularProgress />
            </div>
        ) : <LinearProgress key="line-loader" className={classes.progress}/>;
       
        const posters = mediaList.map((poster, index) => (
                <Poster
                    key={`poster-${index}`}
                    posterTitle={poster.title} 
                    posterImg={poster.image_url}
                    rank={poster.rank}
                    media={media}
                    filter={filter}
                    id={poster.mal_id}/>
        ));
        return(
            <React.Fragment>
                {mediaList.length === 0 &&
                    loader
                }
                <InfiniteScroll
                    className={classes.root} 
                    pageStart={0}
                    loadMore={this.handleLoadMore.bind(this)}
                    hasMore={!this.props.isFetching}>
                        {posters}    
                </InfiniteScroll>
                {(this.props.isFetching && mediaList.length !== 0 ) && 
                    loader
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        mediaList: state.mediaReducer.mediaList.mediaList,
        isFetching: state.mediaReducer.mediaList.isFetching,
        params: state.mediaReducer.mediaList.params,
        hasMore: state.mediaReducer.mediaList.hasMore,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadMoreMedia: (params, hasMore) => dispatch(fetchTopMediaList(params, 'more', hasMore))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(withStyles(useStyles)(MediaList));