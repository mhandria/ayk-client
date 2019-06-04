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
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class MediaList extends Component {
    constructor(props) {
        super(props);
    }

    handleLoadMore() {
        console.log('load more');
        const params = Object.assign({}, this.props.params, {
            page: this.props.params.page+1,
        })
        this.props
            .loadMoreMedia(params);
    }

    render() {
        console.log(this.props.mediaList);
        const mediaList = this.props.mediaList
        const classes = this.props.classes;
        const loader = (mediaList.length !== 0) ? (
            <div key="loader" className={classes.progress}>
                <CircularProgress />
            </div>
        ) : <LinearProgress key="line-loader" className={classes.progress}/>;
        const posters = [];
        mediaList.map((poster, index) => {
            posters.push(
                <Poster
                    key={`poster-${index}`}
                    id={index}
                    posterTitle={poster.title} 
                    posterImg={poster.image_url}
                    rank={poster.rank}/>
            );
        });
        return(
            <React.Fragment>
                {mediaList.length === 0 &&
                    loader
                }
                <InfiniteScroll
                    className={classes.root} 
                    pageStart={0}
                    loadMore={this.handleLoadMore.bind(this)}
                    hasMore={!this.props.isFetching}
                    loader={loader}>
                        {posters}    
                </InfiniteScroll>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        mediaList: state.mediaReducer.mediaList.mediaList,
        isFetching: state.mediaReducer.mediaList.isFetching,
        params: state.mediaReducer.mediaList.params
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadMoreMedia: (params) => dispatch(fetchTopMediaList(params, 'more'))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(withStyles(useStyles)(MediaList));