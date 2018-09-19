import { combineReducers } from 'redux';
import phones from './phones';
import visibilityFilter from './visibilityFilter';

const PhonesApp = combineReducers({
  phones,
  visibilityFilter,
});

export default PhonesApp;
