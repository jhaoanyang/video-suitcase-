import * as types from '../actions/types';

const initialState = {
    items: [],
    nextPageToken: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_VIDEOS:
            
            return {
                ...state,
                items: [
                    ...state.items,
                    ...action.payload.items
                ],
                nextPageToken: action.payload.nextPageToken
            };
    
        default:
            return state;
    }
}