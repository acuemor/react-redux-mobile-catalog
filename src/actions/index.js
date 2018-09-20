const axios = require('axios');

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const getPhoneDetail = phoneDetail => ({
  type: 'GET_PHONE_DETAIL',
  phoneDetail,
});

export const restorePhoneDetail = phoneDetail => ({
  type: 'RESTORE_PHONE_DETAIL',
  phoneDetail,
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
