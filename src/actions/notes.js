import { db } from "../firebase/firebaseConfig";

export const startAddNote = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const ejemplo = {
      title: "titulo",
      body: "descripcion",
      date: new Date().getTime(),
    };
    // console.log(getState());
    db.collection(`${uid}/journal/notes/`)
      .add(ejemplo)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
