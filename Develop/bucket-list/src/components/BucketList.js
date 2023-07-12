import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // Generate a unique ID for the new item
    const newItem = { id: Date.now(), ...item };

    // Add the new item to the bucket list
    setBucket([...bucket, newItem]);
  };

  // Function to mark bucket list item as complete or incomplete
  const completeBucketItem = (id) => {
    // Map through the bucket list and update the completion status of the item with the matching ID
    const updatedBucket = bucket.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item
  const removeBucketItem = (id) => {
    // Filter out the item with the matching ID from the bucket list
    const updatedBucket = bucket.filter((item) => item.id !== id);

    setBucket(updatedBucket);
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // Map through the bucket list and update the item with the matching ID
    const updatedBucket = bucket.map((item) =>
      item.id === itemId ? { ...item, text: newValue.text } : item
    );

    setBucket(updatedBucket);
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      />
    </div>
  );
}

export default BucketList;
