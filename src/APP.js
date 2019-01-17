import React from 'react';

import img from './img/1.png';

export default function () {
  console.log(2);
  Array.of(1, 2, 3, 4).forEach((item) => {
    console.log(item);
  });
  return (
    <div className="header">
      <img src={img} alt="" srcSet="" />
      111
      React
    </div>
  );
}
