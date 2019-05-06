import React, { Component } from 'react';
import KitsuService from '../services/KitsuService';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Poster from '../components/Poster';

const useStyles = (theme) => createStyles({
    root: {
        display: 'flex',
        padding: '10px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
class AnimeTVList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animeList: [],
            offset: 0,
            page: 20
        };
    }

    componentWillMount() {
        this.fetchMoreData();
    }

    fetchMoreData() {
        const page = this.state.page;
        const offset = this.state.offset;
        KitsuService.Kitsu.getByPage(page, offset)
            .subscribe(res => {
                const animeList = [];
                res.data.data.map((value, index) => {
                    animeList.push({
                        id: index+this.state.offset,
                        attributes: value.attributes
                    });
                });
                this.setState({
                    animeList: this.state.animeList.concat(animeList),
                    page: page,
                    offset: offset+page
                });
            });
    }

    render() {
        const animeList = this.state.animeList
        const classes = this.props.classes;
        return(
            <div className={classes.root} onScroll={this.fetchMoreData()}>
                {animeList.map((value, index) => {
                    const poster = {
                        posterImg: value.attributes.posterImage.large,
                        posterTitle: value.attributes.canonicalTitle
                    };
                    return(
                        <Poster 
                            key={index} 
                            {...poster} />
                    );
                })}
            </div>
        );
    }
}

export default withStyles(useStyles)(AnimeTVList);