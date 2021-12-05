import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import jogo from './jogo/sagas';

export default function* rootSaga() {
  return yield all([auth, jogo]);
}
