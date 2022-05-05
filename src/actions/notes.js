import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startAddNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    // console.log(getState());
    const doc = await db.collection(`${uid}/journal/notes/`).add(newNote);
    console.log(doc);
    dispatch(activeNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note,
    },
  };
};
