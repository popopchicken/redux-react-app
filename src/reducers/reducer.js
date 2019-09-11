import { FETCH_USER_FAILED, FETCH_USER_SUCCESS } from '../constants/constants';
import { combineReducers } from 'redux';

const initialState = {};
export const user = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return action.payload.user;
        case FETCH_USER_FAILED: 
            return {};
        default:
            return state;
    }
};

export default combineReducers({
    user,
});
