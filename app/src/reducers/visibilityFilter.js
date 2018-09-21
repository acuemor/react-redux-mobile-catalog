const initialFilterState = {
  filter: 'SHOW_ALL',
};

const visibilityFilter = (state = initialFilterState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default visibilityFilter;
