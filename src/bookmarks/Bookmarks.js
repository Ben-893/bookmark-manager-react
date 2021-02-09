import React from 'react';

const Bookmarks = () => {
  const bookmarks = [
    'http://www.makersacademy.com',
    'http://www.destroyallsoftware.com',
    'http://www.google.com'
  ];
  return (
    <div>
      {bookmarks.map(bookmark => (
        <a key={bookmark} href={bookmark}>
          <li>{bookmark}</li>
        </a>
      ))}
    </div>
  );
};

export default Bookmarks;
