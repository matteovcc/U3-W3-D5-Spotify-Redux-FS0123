import { FETCH_SONGS_REQUEST, FETCH_SONGS_SUCCESS } from "../actions/index";

const initialState = {
  loading: false,
  songs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        songs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
