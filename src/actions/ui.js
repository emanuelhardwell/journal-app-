import { types } from "../types/types";

export const setError = (err) => {
  return {
    type: types.uiSetError,
    payload: err,
  };
};

export const removeError = () => {
  return {
    type: types.uiRemoveError,
  };
};
