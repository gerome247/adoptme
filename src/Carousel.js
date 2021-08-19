import React, { useState } from 'react';
const Carousel = (props) => {
  console.log('images', props.images);
  const { images } = props;
  console.log('images', images);
  const active = 0;
  let [state, setState] = useState(active);
  let hero;

  if (!images) {
    hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
  }

  function handleIndexClick(e) {
    setState(+e.target.dataset.index);
  }

  return (
    <div className="carousel">
      {!images ? <img src={hero} alt="animal" /> : <img src={images[state]} alt="animal" />}
      <div className="carousel-smaller">
        {!images ? (
          <img src={hero} className="active" alt="animal thumbnail" />
        ) : (
          images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              data-index={index}
              onClick={handleIndexClick}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Carousel;
