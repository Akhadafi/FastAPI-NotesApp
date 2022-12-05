import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import { Link } from 'react-router-dom';

let dummyData = [
  { id: '1', body: 'Post 01' },
  { id: '2', body: 'Post 02' },
  { id: '3', body: 'Post 03' },
  { id: '4', body: 'Post 04' },
  { id: '5', body: 'Post 05' },
];

const Notes = () => {
  let [notes, setNote] = useState(dummyData);
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
