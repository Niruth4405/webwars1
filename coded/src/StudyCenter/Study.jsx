import React from 'react';
import '/App.css';
const Study = () => {
  const embedUrl = "https://www.google.com/maps/d/edit?mid=1n2KukrosnsLTlye27Q9NRWY-vspFcco&usp=sharing";
  
  return (
    <div className=' w-[100%] h-[100vh]'>
      <a href={embedUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={`https://www.google.com/maps/d/edit?mid=1n2KukrosnsLTlye27Q9NRWY-vspFcco&usp=sharing`}
          alt="Google Map"
        />
      </a>
    </div>
  );
};

export default Study;