import React, { Component } from 'react';
import KitsuService from '../services/KitsuService';
import { Typography } from '@material-ui/core';

class AnimeTVList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animeList: [{id: 0, attributes: {canonicalTitle: 'Test'}}],
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
        console.log(this.state);
        KitsuService.Kitsu.getByPage(page, offset)
            .subscribe(res => {
                const animeList = [];
                res.data.data.map((value, index) => {
                    animeList.push({
                        id: index+this.state.offset,
                        attributes: value.attributes
                    });
                });
                console.log(animeList);
                this.setState({
                    animeList: this.state.animeList.concat(animeList),
                    page: page,
                    offset: offset+page
                });
            });
    }

    render() {
        const animeList = this.state.animeList
        console.log(animeList);
        return(
            <div onScroll={this.fetchMoreData()}>
                AnimeList
                {animeList.map((value, index) => {
                    console.log('values: ', value);
                    return(
                        <Typography key={index} variant="h4" noWrap>
                            {value.attributes.canonicalTitle}, {value.id}
                        </Typography>
                    );
                })}
            </div>
        );
    }
}

export default AnimeTVList;