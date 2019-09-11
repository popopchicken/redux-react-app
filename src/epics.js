import 'rxjs';
import { FETCH_USER } from './constants/constants';
import { fetchUserSuccess, fetchUserFailed } from './actions/actions';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, takeUntil, catchError, retry } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

// Effects/Client that makes the service call to the backend APIs
export const fetchUser = actions$ => 
    actions$.pipe(
        ofType(FETCH_USER),
        mergeMap(action =>
            ajax.getJSON(`https://api.github.com/users/${action.payload.username}`).pipe(
                map(user => fetchUserSuccess(user)),
                takeUntil(actions$.ofType(FETCH_USER)),
                retry(2),
                catchError(error => Observable.of(fetchUserFailed()))
              )
        )
    );

export default combineEpics(
    fetchUser
);
