import { combineReducers } from 'redux';
import auth from './auth/reducer';
import jogo from './jogo/reducer';

export default combineReducers({
  auth,
  jogo,
});
