import React, { useState, useEffect } from 'react';

// https://api.unsplash.com/search/photos?query=nature&client_id=xh3eA0B15NkA-iCPrN_KdhybMqz49n7gxU2D1gjOj0E
// import natureData from '../../../public/API/natureData.json';

const Results = () => {
  const [images, setImages] = useState([]);

  const getData = () => {
    fetch('API/natureData.json')
      // .then((response) => {
      //   if (response.ok) return response;
      //   throw new Error(response.status);
      // })
      .then((response) => response.json())
      .then((data) => {
        setImages(data.results);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Results">
      <div className="Results__wrapper">
        <h1 className="Results__title">Your results</h1>
        <div className="ResultsList">
          {images.map((data) => (
            <p key={data.id}>{data.description}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
