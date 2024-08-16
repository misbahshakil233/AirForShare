import React, { useState } from 'react';
import LOGO from '../../../assets/logo.svg';
import "../css/style.scss";
import { ImFilesEmpty } from "react-icons/im";
import { GrTextAlignFull } from "react-icons/gr";
import TextArea from '../../../components/textArea';  // Correct component naming
import Button from '../../../components/Button';

const Home = () => {
  const [type, setType] = useState("text");
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='container'>
      <div className='header-bar'>
        <div className='logo'>
          <img src={LOGO} alt="Logo" />
        </div>
        <div className={`menu-bar ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>How it works</li>
            <li>Download</li>
            <li>Upgrade</li>
            <li>Feedback</li>
            <li className='menu-btn'>Login/Register</li>
          </ul>
        </div>
        <div className='hamburger' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='main-card'>
        <div className='card-sidebar'>
          <div onClick={() => setType("text")} className={type === "text" ? 'active' : ''}>
            <GrTextAlignFull style={{ width: 30, height: 25 }} />
          </div>
          <div onClick={() => setType("file")} className={type === "file" ? 'active' : ''}>
            <ImFilesEmpty style={{ width: 30, height: 25 }} />
          </div>
        </div>
        <div className='card-container'>
          {type === "text" ? (
            <div>
              <div className='text-section'>
                <h1>Text</h1>
                <TextArea /> {/* Use the imported TextArea component here */}
              </div>
              <div>
                <Button title={"Save"} />
              </div>
            </div>
          ) : (
            <div className='file-section'>
              <h1>File</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
