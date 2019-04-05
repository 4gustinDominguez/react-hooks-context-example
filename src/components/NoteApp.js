import React, { useEffect, useReducer } from 'react';

import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () => {
  //const [notes, setNotes] = useState([]);
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) notesDispatch({ type: 'POPULATE_NOTES', notes });
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const removeNote = title => {
    notesDispatch({
      type: 'REMOVE_NOTE',
      title,
    });
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteList notes={notes} removeNote={removeNote} />
      <AddNoteForm notesDispatch={notesDispatch} />
    </div>
  );
};

export { NoteApp as default };
