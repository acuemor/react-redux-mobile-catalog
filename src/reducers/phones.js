const initialPhoneState = () => ({
  phoneList: [],
  phoneDetail: null,
});

const phones = (state = initialPhoneState(), action) => {
  switch (action.type) {
    case 'GET_PHONE_LIST':
      return {
        ...state,
        // corresponde con las propiedades que hay en el dispath del action
        phoneList: action.phoneList,
      };
    case 'GET_PHONE_DETAIL':
      return {
        ...state,
        phoneDetail: action.phoneDetail,
      };
    default:
      return state;
  }
};

export default phones;
