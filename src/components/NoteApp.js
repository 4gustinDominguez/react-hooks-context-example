import React, { useEffect, useReducer } from 'react';

import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes';

const NoteApp = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  // Runs only once on application load (similar to ComponentDidMount()) becuase it doesn't reference any state
  // as the second argument.
  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) notesDispatch({ type: 'POPULATE_NOTES', notes });
  }, []);

  // Runs everytime the notes state is updated (similar to ComponentDidUpdate())
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Returns the Note Application wrapped in NotesContext which gives every child
  // component access to the NotesReducer state and actions.
  // https://reactjs.org/docs/context.html#contextprovider
  return (
    <NotesContext.Provider value={{ notes, notesDispatch }}>
      <h1>Notes App</h1>
      <NoteList />
      <AddNoteForm />
    </NotesContext.Provider>
  );
};

export { NoteApp as default };
