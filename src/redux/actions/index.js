export const FETCH_SONGS_REQUEST = "FETCH_SONGS_REQUEST";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";

export const fetchSongsRequest = () => ({
  type: FETCH_SONGS_REQUEST,
});

export const fetchSongsSuccess = (songs) => ({
  type: FETCH_SONGS_SUCCESS,
  payload: songs,
});

export const fetchSongs = (query) => {
  return (dispatch) => {
    dispatch(fetchSongsRequest());
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSongsSuccess(data));
      });
  };
};
