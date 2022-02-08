import { GET_PAINTINGS_SUCCESS, GET_PAINTINGS_ERROR } from './paintingsConstants.jsx'
import "isomorphic-fetch"

export function receivePaintings(data) {
    return {
        type: GET_PAINTINGS_SUCCESS,
        paintings: data
    }
}

export function errorReceive(err) {
    return {
        type: GET_PAINTINGS_ERROR,
        error: err
    }
}

export function getPaintings(pageIndex = 0) {
    return (dispatch) => {
        //let queryTrailer = '?pageIndex=' + pageIndex;
        if (tag) {
            queryTrailer += '&tag=' + tag;
        }
        fetch(constants.getPaintings/* + queryTrailer*/)
            .then((response) => {
                return response.json()
            }).then((data) => {
                dispatch(receivePaintings(data))
            }).catch((ex) => {
                dispatch(errorReceive(err))
            });
    }
}