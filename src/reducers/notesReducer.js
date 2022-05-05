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

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
