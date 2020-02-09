import React from 'react';
import { useLocation } from 'react-router-dom';

const Content = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <p>{location.pathname}</p>
    </React.Fragment>
  );
};

export default Content;
