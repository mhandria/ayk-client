import React, { Component } from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Poster from './Poster';
import InfiniteScroll from 'react-infinite-scroller';
import AYKService from '../services/AYKService';
import { LOAD_MORE_ANIME } from '../constants/actionType';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    loadMore: (page, offset) => {
        AYKService.AnimeService.getByPage(page, offset)
            .then(res => dispatch({
                type: LOAD_MORE_ANIME,
                data: res
            }));
    },
});

const mapStateToProps = state => ({
    ...state.animeReducer
});


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

class AnimeTVList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props
        .loadMore(this.props.page, this.props.offset);
    }

    handleLoadMore() {
        this.props
        .loadMore(this.props.page, this.props.offset);
    }

    // async fetchMoreData() {
    //     const page = this.state.page;
    //     const offset = this.state.offset;
    //     let response = await AYKService.AnimeService.getByPage(page, offset);
    //     let testArray = response.data.map((value, index) => ({
    //         id: index + this.state.offset,
    //         attributes: value.attribute
    //     })).map(tValue => ({
    //         id: tValue.id,
    //         ...tValue.attributes
    //     }));
    //     this.setState({
    //         animeList: this.state.animeList.concat(testArray),
    //         page: page,
    //         offset: offset+page,
    //         hasMore: true
    //     });
    // }

    render() {
        const animeList = this.props.animeList
        const classes = this.props.classes;
        const loader = (animeList.length !== 0) ? (
            <div key="loader" className={classes.progress}>
                <CircularProgress />
            </div>
        ) : <LinearProgress key="line-loader" className={classes.progress}/>;
        const posters = [];
        animeList.map((poster, index) => {
            posters.push(
                <Poster
                    key={`poster-${index}`}
                    id={index}
                    posterTitle={poster.canonicalTitle} 
                    posterImg={poster.posterImage.tiny}/>
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
                    loadMore={this.handleLoadMore.bind(this)}
                    hasMore={this.props.hasMore}
                    loader={loader}>
                        {posters}    
                </InfiniteScroll>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps,)(withStyles(useStyles)(AnimeTVList));