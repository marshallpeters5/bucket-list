import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value);
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div
      className={`bucket-row ${item.completed ? 'complete' : ''} ${item.eagerness}`}
      key={index}
      style={{ backgroundColor: item.eagerness }}
    >
      <div onClick={() => props.completeBucketItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p
          onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}
        >
          ✏️
        </p>
        <p onClick={() => props.removeBucketItem(item.id)}>🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
