import React from 'react';
import FilterBar from './FilterBar';
import MediaList from './MediaList';

import { connect } from 'react-redux';
import { fetchTopMediaList } from '../middleware/api';

function MediaTopPage(props) {
    const filters = 
        (props.media === 'manga') ? ['manga', 'novels', 'oneshots', 'manhwa', 'manhua'] :
        ['airing', 'upcoming', 'tv', 'movie', 'ova', 'special']
    props.detectMediaTypeChange({
        media: props.media,
        page: 1,
        filter: filters[0]
    });
    return (
        <React.Fragment>
            <FilterBar filters={filters} {...props} />
            <MediaList />
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        detectMediaTypeChange: (parameters) => dispatch(fetchTopMediaList(parameters, 'new', true)),
    }
}

export default connect(
    null,
    mapDispatchToProps,
)(MediaTopPage);