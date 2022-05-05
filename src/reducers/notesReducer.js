/*
    {
        notes: [],
        active: null,
        active: {
            id: "ghwvdcjwygcfuywgbuiwygwi",
            title: "titulo journal",
            body: "description journal",
            imageUrl: "http://...."
            date: 1234567
        }
    }
*/

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
