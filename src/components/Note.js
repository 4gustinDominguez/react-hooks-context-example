import React, { useContext } from 'react';
import NotesContext from '../context/notes';
import useMousePosition from '../hooks/useMousePosition';

const Note = ({ note }) => {
  // Return the notesDispatch action from the current context value
  // https://reactjs.org/docs/hooks-reference.html#usecontext
  const { notesDispatch } = useContext(NotesContext);

  // Create a variable for useMousePosition() hook.
  // https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook
  const position = useMousePosition();

  // Dispatch REMOVE_NOTE action on button click
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
      <p>
        {position.x}, {position.y}
      </p>
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
