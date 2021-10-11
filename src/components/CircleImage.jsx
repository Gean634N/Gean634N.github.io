import React from 'react';
import perfilGean from'../img/perfil-gean.png';
import '../css/circleImage.css';

const CircleImage = () => {
  return (
    <div className="img__content" >
      <img
        // site used to remove bg from picture: https://www.remove.bg/pt-br/upload
        className="img"
        y='-35'
        src={ perfilGean }
        alt="portfolio website owner smiling"
      />
    </div>
  );
}

export default CircleImage;
