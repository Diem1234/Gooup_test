import { ADD_USER, UPDATE_USER, DELETE_USER } from '../actions/userActions';
const initialState = {
  userList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      const updatedUserList = state.userList.map((u) => {
        if (u.id === action.payload.id) {
          return {
            ...u,
            id: action.payload.id,
            name: action.payload.name,
            age: action.payload.age,
          };
        }
        return u;
      });
      return {
        ...state,
        userList: updatedUserList,
      };

    case 'DELETE_USER':
      const filteredUserList = state.userList.filter((u) => u.id !== action.payload);
      return {
        ...state,
        userList: filteredUserList,
      };

    case 'ADD_USER':
      const newUserList = [...state.userList, action.payload];
      return {
        ...state,
        userList: newUserList,
      };

    default:
      return state;
  }
};

export default userReducer;