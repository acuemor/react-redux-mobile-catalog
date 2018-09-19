const initialPhoneState = () => ({
  phoneList: [],
});

const phones = (state = initialPhoneState(), action) => {
  switch (action.type) {
    case 'GET_PHONE_LIST':
      return {
        ...state,
        phoneList: action.phoneList, // corresponde con las propiedades que hay en el dispath del action
      };
    default:
      return state
  }
}

export default phones;
