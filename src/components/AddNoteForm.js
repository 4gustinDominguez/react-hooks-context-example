import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes';

const AddNoteForm = () => {
  const { notesDispatch } = useContext(NotesContext);

  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

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
