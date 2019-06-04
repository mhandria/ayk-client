import { normalize, schema } from 'normalizr';

import { requestMediaList, receiveMediaList, requestMoreMediaList, receiveMoreMediaList } from '../actions';
import axios from 'axios';


const API_ROOT = 'https://api.jikan.moe/v3';


export function fetchTopMediaList(parameters, fetchType = 'new') {
    const {media, page, filter} = parameters;
    return dispatch => {
        if (fetchType === 'more') {
            dispatch(requestMoreMediaList(parameters));
        } else {
            dispatch(requestMediaList(parameters));
        }
        return axios.get(`${API_ROOT}/top/${media}/${page}/${filter}`)
        .then(
            response => response.data.top,
            error => console.log(`An error occored. ${error}`)
        )
        .then(topMediaList => {
            if(fetchType === 'more'){
                dispatch(receiveMoreMediaList(parameters, topMediaList));
            } else {
                dispatch(receiveMediaList(parameters, topMediaList));
            }
                
        });
    }
}