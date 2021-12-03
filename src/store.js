import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Action } from './actions';

function reducer(state, action) {
    switch (action.type) {
        case Action.LoadArtists:
            return {
                ...state,
                artists: action.payload,
            };
        case Action.LoadAlbums:
            return {
                ...state,
                albums: action.payload,
            };
        case Action.LoadTracks:
            return {
                ...state,
                tracks: action.payload,
            };
        case Action.ShowProgress:
            return {
                ...state,
                isProgressing: true,
            };
        case Action.HideProgress:
            return {
                ...state,
                isProgressing: false,
            };
        default:
            return state;
    }
}

const initialState = {
    artists: [],
    albums: [],
    tracks: [],
    isProgressing: false,
};


export const store = createStore(reducer, initialState, applyMiddleware(thunk));