import React, { Component } from 'react';
import KitsuService from '../services/KitsuService';
import { LinearProgress } from '@material-ui/core';
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
    bar: {
        width: '100vw'
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
        const loader = <LinearProgress className={classes.bar}/>;
        const posters = [];
        animeList.map((poster, index) => {
            console.log(poster);
            posters.push(
                <Poster
                    key={index}
                    id={index}
                    posterTitle={poster.canonicalTitle} 
                    posterImg={poster.posterImage.large}/>
            );
        });
        return(
            <React.Fragment>
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