import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [...state, { title: action.title, body: action.body }];
    case 'REMOVE_NOTE':
      return state.filter(note => note.title !== action.title);
    default:
      return state;
  }
};

/**
 * A more complex example of using useState() with multiple varialbes and objects.
 */
const NoteApp = () => {
  //const [notes, setNotes] = useState([]);
  const [notes, notesDispatch] = useReducer(notesReducer, []);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));

    if (notes) notesDispatch({ type: 'POPULATE_NOTES', notes });
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

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

  const removeNote = title => {
    notesDispatch({
      type: 'REMOVE_NOTE',
      title,
    });
  };

  return (
    <div>
      <h1>Notes App</h1>
      {notes.map(note => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
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
          <textarea
            value={noteBody}
            onChange={e => setNoteBody(e.target.value)}
          />
        </p>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    return () => {
      console.log('Cleaning up effect');
    };
  }, []);
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

ReactDOM.render(<NoteApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
