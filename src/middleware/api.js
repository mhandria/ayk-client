import { 
    requestMediaList, 
    receiveMediaList, 
    requestMoreMediaList, 
    receiveMoreMediaList,
    noMoreMediaList, 
} from '../actions';
import axios from 'axios';


const API_ROOT = 'https://api.jikan.moe/v3';

export function fetchMediaDetail(mediaId, media) {
    return axios.get(`${API_ROOT}/${media}/${mediaId}`);
}

export function fetchTopMediaList(parameters, fetchType = 'new', hasMore) {
    if (!hasMore) {
        return dispatch => dispatch(noMoreMediaList(parameters));
    }
    const {media, page, filter} = parameters;
    return dispatch => {
        if (fetchType === 'more') {
            dispatch(requestMoreMediaList(parameters));
        } else {
            dispatch(requestMediaList(parameters));
        }
        return axios.get(`${API_ROOT}/top/${media}/${page}/${filter}`)
        .then(
            response => response.data.top.filter((value) => value.rank > 0),
            error => {
                if(error.response.status === 404) {
                    return [];
                } else {
                    return undefined;
                }
            }
        )
        .then(topMediaList => {
            if (topMediaList === undefined) {
                return ;
            }
            if(topMediaList.length === 0) {
                dispatch(noMoreMediaList(parameters));
            } else {
                if(fetchType === 'more'){
                    dispatch(receiveMoreMediaList(parameters, topMediaList));
                } else {
                    dispatch(receiveMediaList(parameters, topMediaList));
                }
            }   
        });
    }
}