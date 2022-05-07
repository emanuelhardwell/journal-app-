import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const { active } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleSaveNote = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    document.querySelector("#fileselector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>28 de agosto 2020</span>

      <input
        type="file"
        id="fileselector"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>

        <button className="btn" onClick={handleSaveNote}>
          Save
        </button>
      </div>
    </div>
  );
};
