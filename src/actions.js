import { 
    REQUEST_MEDIA_LIST, 
    RECIEVE_MEDIA_LIST,
    UPDATE_FILTER_SELECTED,
    REQUEST_MORE_MEDIA,
    RECIEVE_MORE_MEDIA,
} from './constants';

export function requestMediaList(parameters) {
    return {
        type: REQUEST_MEDIA_LIST,
        params: parameters
    }
}

export function receiveMediaList(parameters, topMediaList) {
    return {
        type: RECIEVE_MEDIA_LIST,
        params: parameters,
        mediaList: topMediaList
    }
}

export function updateFilterSelected(filter, media) {
    return {
        type: UPDATE_FILTER_SELECTED,
        filter: filter,
        media: media,
    }
}

export function requestMoreMediaList(parameters) {
    return {
        type: REQUEST_MORE_MEDIA,
        params: parameters,
    }
}

export function receiveMoreMediaList(parameters, topMediaList) {
    return {
        type: RECIEVE_MORE_MEDIA,
        params: parameters,
        mediaList: topMediaList
    }
}