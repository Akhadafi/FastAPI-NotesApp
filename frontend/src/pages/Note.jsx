import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

let dummyData = [
  { id: '1', body: 'Post 01' },
  { id: '2', body: 'Post 02' },
  { id: '3', body: 'Post 03' },
  { id: '4', body: 'Post 04' },
  { id: '5', body: 'Post 05' },
];

const Note = ({ match }) => {
  let params = useParams();
  let noteId = params.id;

  let foundNote = dummyData.find((note) => note.id === noteId);

  let [note, setNote] = useState(foundNote);

  return (
    <div>
      <Link to={'/'}>Go Back</Link>
      {noteId !== 'add' && <button>Delete</button>}
      <textarea
        onChange={(e) => {
          setNote(e.target.value);
        }}
        value={note?.body}
        placeholder='Enter Note...'
      ></textarea>
      <button>Save</button>
    </div>
  );
};

export default Note;
