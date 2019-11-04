import apiReducer from './api';
import {combineReducers} from 'redux';
import videosReducer from './video'

export function index(state={}, action) {
    switch(action.type) {
        default: 
            return state;
    }
}

export default combineReducers({
  api: apiReducer,
  videos: videosReducer
});