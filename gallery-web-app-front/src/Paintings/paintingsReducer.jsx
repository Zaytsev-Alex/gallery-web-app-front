import { GET_PAINTINGS_SUCCESS, GET_PAINTINGS_ERROR } from './paintingsConstants.jsx'

const initialState = {
    data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
    error: ''
}

export default function paintings(state = initialState, action) {
    switch (action.type) {
        case GET_PAINTINGS_SUCCESS:
            return { ...state, data: action.posts, error: '' }

        case GET_PAINTINGS_ERROR:
            return { ...state, error: action.error }

        default:
            return state;
    }
}