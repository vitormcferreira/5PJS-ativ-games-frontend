import axios from '../../../services/axios';
import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return { ...state };
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    }

    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      return { ...initialState };
    }

    case types.REGISTER_REQUEST: {
      return { ...initialState };
    }

    case types.REGISTER_SUCCESS: {
      return { ...initialState };
    }

    case types.REGISTER_FAILURE: {
      return { ...initialState };
    }

    default: {
      return state;
    }
  }
}
