import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../actions/authActions";

const storedUser = localStorage.getItem("users");

const initialState = {
  users: storedUser ? JSON.parse(storedUser) : null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        users: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        users: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;