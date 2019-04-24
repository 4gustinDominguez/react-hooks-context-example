import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes';

const NoteList = () => {
  // Return the notes state from the current context value
  // https://reactjs.org/docs/hooks-reference.html#usecontext
  const { notes } = useContext(NotesContext);

  // Maps each note from state to it's own Note component
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  return notes.map(note => <Note key={note.title} note={note} />);
};

export { NoteList as default };
