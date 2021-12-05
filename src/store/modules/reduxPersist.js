import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'JogoDaMemoria',
      storage,
      whitelist: ['auth', 'jogo'],
    },
    reducers
  );
  return persistedReducers;
};
