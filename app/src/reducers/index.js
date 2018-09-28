import { combineReducers } from 'redux';
import phones from './phones';
import visibilityFilter from './visibilityFilter';
import modal from './modal';

const PhonesApp = combineReducers({
  phones,
  visibilityFilter,
  modal,
});

export default PhonesApp;
