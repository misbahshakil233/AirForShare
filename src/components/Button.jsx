import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ onClick, title }) => {
  return (
    <div className='btn-container'>
    <button className="button" onClick={onClick}>
      {title}
    </button>
<div className='clear-container'>
 
</div>

    </div>



  );
}

export default Button;
