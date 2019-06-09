import { combineReducers } from 'redux';

import {  
    REQUEST_MEDIA_LIST,
    RECIEVE_MEDIA_LIST,
    RECIEVE_MORE_MEDIA,
    UPDATE_FILTER_SELECTED,
    REQUEST_MORE_MEDIA,
    NO_MORE_MEDIA,
} from '../constants';


/**
 * TODO: async flow 
 * reducers to populate the list of application. 
 * @param {*} state 
 * @param {*} action 
 */
function mediaList(state = {
    mediaList: [],
    params: {
        page: 1,
        media: 'anime',
        filter: 'airing'
    },
    isFetching: false,
    hasMore: true,
}, action) {
    switch (action.type) {
        case REQUEST_MEDIA_LIST:
            return Object.assign({}, state, {
                mediaList: [],
                isFetching: true,
                params: action.params,
            });
        case RECIEVE_MEDIA_LIST: 
            return Object.assign({}, state, {
                mediaList: action.mediaList,
                params: action.params,
                isFetching: false,
                hasMore: true,
            });
        case UPDATE_FILTER_SELECTED: 
            return Object.assign({}, state, {
                params: {
                    filter: action.filter,
                    media: action.media,
                },
                hasMore: true,
            })
        case RECIEVE_MORE_MEDIA:
            return Object.assign({}, state, {
                mediaList: state.mediaList.concat(action.mediaList),
                isFetching: false,
            });
        case REQUEST_MORE_MEDIA: 
            return Object.assign({}, state, {
                isFetching: true,
                params: action.params,
            });
        case NO_MORE_MEDIA:
            return Object.assign({}, state, {
                isFetching: false,
                hasMore: false,
            })
        default: 
            return state;
    }
}

const mediaReducers = combineReducers({
    mediaList
});

export default mediaReducers;