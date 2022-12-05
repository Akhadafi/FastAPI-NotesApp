import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import { Link } from 'react-router-dom';

const Notes = () => {
  let [notes, setNote] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/notes');
    let data = await response.json();
    setNote(data);
  };

  return (
    <div className=''>
      <Link to={'/add'}>Add</Link>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <ListItem note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
