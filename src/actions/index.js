export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const togglePhoneStock = (id) => {
  return {
    type: 'TOGGLE_PHONE_STOCK',
    id
  }
}