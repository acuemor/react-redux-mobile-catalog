const initialModalState = () => ({
  title: '',
  content: null,
  close: true,
});

export const modal = (state = initialModalState(), action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        // corresponde con las propiedades que hay en el dispath del action
        content: action.content,
        title: action.title,
        close: false,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        ...initialModalState(),
      };
    default:
      return state;
  }
};

export default modal;
