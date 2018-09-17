const phone = (state = {}, action) => {
    switch (action.type) {
      case 'TOGGLE_PHONE_STOCK':
        if (state.id !== action.id) {
          return state
        }
  
        return Object.assign({}, state, {
          inStock: !state.completed
        })
  
      default:
        return state
    }
  }
  
  const phones = (state = [], action) => {
    switch (action.type) {
      case 'TOGGLE_PHONE_STOCK':
        return state.map(st =>
          phone(st, action)
        )
      default:
        return state
    }
  }
  
  export default phones;