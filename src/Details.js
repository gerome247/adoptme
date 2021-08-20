import React, { useContext, useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';

import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';
import ThemeContext from './ThemeContext';

const Details = ({}) => {
  let params = useParams();
  const [detail, setDetail] = useState([]);
  const [status, setStatus] = useState('loading');
  const [theme] = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  let adopt;
  useEffect(() => {
    fetchPet();
  }, []);

  if (typeof window !== 'undefined') {
    adopt = () => (window.location = 'http://bit.ly/pet-adopt');
  }
  async function fetchPet() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${params.id}`);
    const json = await res.json();
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
                <button style={{ backgroundColor: theme }} onClick={() => setToggle(true)}>
                  Adopt {name}
                </button>
                <p>{description}</p>
                {toggle ? (
                  <Modal>
                    <div>
                      <h1>Would you like to adopt {name}?</h1>
                      <div className="buttons">
                        <button onClick={() => adopt()}>yes</button>
                        <button onClick={() => setToggle(false)}>No</button>
                      </div>
                    </div>
                  </Modal>
                ) : null}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
