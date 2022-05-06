import dayjs from "dayjs";
import React from "react";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const JournalEntry = ({ id, title, body, date, url }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(activeNote(id, { title, body, date, url }));
  };

  return (
    <div className="journal__entry pointer" onClick={handleClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title"> {title} </p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{dayjs(date).format("YYYY-DD-MM")} </span>
        <h4> {dayjs(date).date()} </h4>
      </div>
    </div>
  );
};
