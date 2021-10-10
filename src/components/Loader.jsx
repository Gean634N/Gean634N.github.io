import React from 'react';
import '../css/loader.css'


const Loading = ({ disapear }) => {

  if (disapear) return null;

  return (
    <div className="overlay ">
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
