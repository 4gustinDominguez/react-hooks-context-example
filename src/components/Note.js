import React, { useContext } from 'react';
import NotesContext from '../context/notes';

const Note = ({ note }) => {
  const { notesDispatch } = useContext(NotesContext);

  const removeNote = title => {
    notesDispatch({
      type: 'REMOVE_NOTE',
      title,
    });
  };

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button
        onClick={() => {
          removeNote(note.title);
        }}>
        X
      </button>
    </div>
  );
};

export { Note as default };
