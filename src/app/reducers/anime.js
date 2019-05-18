import {
    LOAD_MORE_ANIME
} from '../constants/actionType';

const animeReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_MORE_ANIME: {
            state.hasMore = action.data.data.length >= 20;
            const array = action.data.data.map((value, index) => ({
                id: index + state.offset,
                attributes: value.attribute
            })).map(value => ({
                id: value.id,
                ...value.attributes
            }));
            state.animeList = state.animeList.concat(array);
            state.offset = state.offset + state.page;
            return {
                ...state
            };
        }
        default: 
            return {
                animeList: [],
                offset: 0,
                page: 20,
                hasMore: false
            };
    }
}

export default animeReducer;