import React from 'react';
import './Loader.css'; // Import your CSS file
import { Spinner } from 'react-bootstrap';
import './Loader.css';
function Loader() {
  return (
    <div className="loader-container">
      <Spinner/>
    </div>
  );
}

export default Loader;
