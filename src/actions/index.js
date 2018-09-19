const axios = require('axios');

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const getPhoneDetail = phoneDetail => ({
  type: 'GET_PHONE_DETAIL',
  phoneDetail,
});

export const loadData = () => dispatch => axios
  .create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    method: 'get',
  })
  .get('/phones')
  .then((response) => {
    dispatch({
      type: 'GET_PHONE_LIST',
      phoneList: response.data,
    });
  })
  .catch((error) => {
    console.log('Error in the request to the endpoint.', error);
  })
  .then(() => {
    // always executed
  });
