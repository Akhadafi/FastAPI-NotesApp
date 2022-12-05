import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ note }) => {
  return (
    <div className=''>
      <Link to={`/${note.id}`}>{note.body}</Link>
    </div>
  );
};

export default ListItem;
