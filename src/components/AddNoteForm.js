import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes';

const AddNoteForm = () => {
  // Return the notesDispatch action from the current context value
  // https://reactjs.org/docs/hooks-reference.html#usecontext
  const { notesDispatch } = useContext(NotesContext);

  // Create local state for the input form field values
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  // Function to dispatch ADD_NOTE action to notesDispatch()
  const addNote = e => {
    e.preventDefault();

    notesDispatch({
      type: 'ADD_NOTE',
      title: noteTitle,
      body: noteBody,
    });

    setNoteTitle('');
    setNoteBody('');
  };

  // Render AddNoteForm component
  return (
    <div>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <p>
          <input
            type="text"
            name="noteTitle"
            id="noteTitle"
            value={noteTitle}
            onChange={e => setNoteTitle(e.target.value)}
          />
        </p>
        <p>
          <textarea value={noteBody} onChange={e => setNoteBody(e.target.value)} />
        </p>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export { AddNoteForm as default };
