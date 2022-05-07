import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
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

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    // console.log(notes);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    dispatch(refreshNote(note.id, note));
    Swal.fire("Save !!", note.title, "success");
  };
};

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdate,
    payload: {
      id,
      note: {
        id,
        ...note,
      },
    },
  };
};

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: noteActive } = getState().notes;

    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    // console.log(noteActive);
    // console.log(file);
    const fileUrl = await fileUpload(file);
    noteActive.url = fileUrl;

    dispatch(startSaveNote(noteActive));

    Swal.close();
  };
};
