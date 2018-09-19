const axios = require('axios');

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const loadData = () => {
  return(dispatch) => {
    return axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 1000,
      method: 'get'
    })
    .get('/phones')
    .then((response) => {
      dispatch({
        type: 'GET_PHONE_LIST',
        phoneList: response.data
      })
    })
    .catch(function (error) {
      console.log('Error in the request to the endpoint.', error);
    })
    .then(function () {
      // always executed
    }); 
  }
}