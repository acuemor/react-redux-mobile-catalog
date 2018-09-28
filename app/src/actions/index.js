const axios = require('axios');

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const loadData = () => (dispatch) => {
  dispatch({ type: 'SPINNER', loading: true });
  axios
    .create({
      baseURL: 'http://localhost:3001',
      timeout: 6000,
      method: 'get',
    })
    .get('/phones')
    .then((response) => {
      dispatch({
        type: 'GET_PHONE_LIST',
        phoneList: response.data,
      });
      dispatch({ type: 'SPINNER', loading: false });
    })
    .catch((error) => {
      console.log('Error in the request to the endpoint.', error);
      dispatch({ type: 'SPINNER', loading: false });
    })
    .then(() => {
      dispatch({ type: 'SPINNER', loading: false });
      // always executed
    });
};

export const openModal = (content, title) => ({
  type: 'OPEN_MODAL',
  content,
  title,
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});
