import { types } from "../types/types";

/* 
    state= {
        uid: "123324526627272",
        name: "Emanuel"
    }

**/
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
