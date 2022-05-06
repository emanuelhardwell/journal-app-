import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSaveNote } from "../../actions/notes";

export const NotesAppBar = () => {
  const { active } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleSaveNote = () => {
    dispatch(startSaveNote(active));
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>

      <div>
        <button className="btn">Picture</button>

        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
