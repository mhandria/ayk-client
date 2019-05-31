import {
    LOAD_MORE_DATA
} from '../constants/action-type';

const extractTransformAnimeDTO = (state, action) => {
    const tAnimeDTO = action.data.data.map((value, index) => ({
        id: index + state.offset,
        attributes: value.attribute
    })).map(value => ({
        id: value.id,
        ...value.attributes
    }));
    return tAnimeDTO
}
const mediaListReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_MORE_DATA: {
            state.hasMore = action.data.data.length >= 20;
            state.animeList = state.animeList
                .concat(extractTransformAnimeDTO(state, action));
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

export default mediaListReducer;