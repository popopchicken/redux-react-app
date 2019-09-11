import { FETCH_USER, FETCH_USER_FAILED, FETCH_USER_SUCCESS } from '../constants/constants';

export const fetchUser = username => ({
    type: FETCH_USER,
    payload: {username}
});

export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS,
    payload: {user}
});

export const fetchUserFailed = () => ({
    type: FETCH_USER_FAILED
});
