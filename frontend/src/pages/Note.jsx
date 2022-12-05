import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Note = ({ match }) => {
  let params = useParams();
  let noteId = params.id;

  // let foundNote = dummyData.find((note) => note.id === noteId);

  let [note, setNote] = useState(null);

  useEffect(() => {
    if (noteId !== 'add') getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`http://127.0.0.1:8000/notes/${noteId}`);
    let data = await response.json();
    setNote(data);
  };

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
