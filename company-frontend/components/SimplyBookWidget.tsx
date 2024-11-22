'use client';

import React from 'react';

const SimplyBookWidget = () => {
  return (
    <iframe
      src="https://ai2connect.simplybook.it/v2/"
      width="100%"
      height="100%"
      frameBorder="0"
      className="rounded-lg shadow"
      title="SimplyBook.me Booking"
    ></iframe>
  );
};

export default SimplyBookWidget;