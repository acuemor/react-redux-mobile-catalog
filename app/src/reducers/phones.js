const initialPhoneState = () => ({
  phoneList: [],
  loading: false,
});

export const phones = (state = initialPhoneState(), action) => {
  switch (action.type) {
    case 'GET_PHONE_LIST':
      return {
        ...state,
        // corresponde con las propiedades que hay en el dispath del action
        phoneList: action.phoneList,
      };
    case 'SPINNER':
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default phones;
