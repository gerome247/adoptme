import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';

import Carousel from './Carousel';

const Details = ({}) => {
  let params = useParams();
  const [detail, setDetail] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetchPet();
  }, []);

  async function fetchPet() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${params.id}`);
    const json = await res.json();
    console.log('data', json.pets[0]);
    setDetail(json.pets);
    setStatus('loaded');
  }

  return (
    <div>
      {status === 'loading' ? (
        <div className="details">
          <h2>Loading...</h2>
        </div>
      ) : (
        detail.map((pet) => {
          const { id, animal, breed, city, state, description, name, images = [] } = pet;

          return (
            <div className="details" key={id}>
              <Carousel images={images} />
              <div>
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                <button>Adopt {name}</button>
                <p>{description}</p>
              </div>
              {name}
            </div>
          );
        })
      )}
    </div>
  );
};
export default withRouter(Details);
