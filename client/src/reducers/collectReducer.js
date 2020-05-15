import * as types from '../actions/types';

const initialState = {
    ids: [],
    items: [],
    nextPageToken: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_COLLECTS:
            return {
                ...state,
                ids: action.payload.items.map(item => item.id),
                items: [
                    ...state.items,
                    ...action.payload.items
                ],
                nextPageToken: action.payload.nextPageToken
            };

        case types.DO_COLLECT:
            if(state.items.find(item => item.id === action.payload.items[0].id)) {
                return {
                    ...state,
                    ids: [
                        ...state.ids,
                        action.id
                    ]
                }
            } else {
                return {
                    ...state,
                    ids: [
                        ...state.ids,
                        action.id
                    ],
                    items: [
                        ...state.items,
                        ...action.payload.items
                    ],
                    nextPageToken: action.payload.nextPageToken
                }
            }

        case types.DELETE_COLLECT:
            return {
                ...state,
                ids: state.ids.filter(item => item !== action.id)
            };
    
        default:
            return state;
    }
}