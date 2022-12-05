import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Note = ({ match }) => {
  let params = useParams();
  let navigate = useNavigate();
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

  let submitData = async () => {
    let url = 'http://127.0.0.1:8000/notes';
    let method = 'POST';

    if (noteId !== 'add') {
      url = `http://127.0.0.1:8000/notes/${noteId}`;
      method = 'PUT';
    }

    await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ body: note.body }),
    });

    navigate('/');
  };

  let deleteNote = async (e) => {
    e.preventDefault();
    await fetch(`http://127.0.0.1:8000/notes/${params.id}`, {
      method: 'DELETE',
    });
    navigate('/');
  };

  return (
    <div>
      <Link to={'/'}>Go Back</Link>
      {noteId !== 'add' && <button onClick={deleteNote}>Delete</button>}
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
        placeholder='Enter Note...'
      ></textarea>
      <button onClick={submitData}>Save</button>
    </div>
  );
};

export default Note;
