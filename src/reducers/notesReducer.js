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

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    case types.notesUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    default:
      return state;
  }
};
