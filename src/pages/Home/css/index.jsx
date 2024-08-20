import React, { useEffect, useState } from 'react';
import LOGO from '../../../assets/logo.svg';
import "../css/style.scss";
import { ImFilesEmpty } from "react-icons/im";
import { GrTextAlignFull } from "react-icons/gr";
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import { useDropzone } from 'react-dropzone';
import DropZone from '../../../components/DropZone';
import FileList from '../../../components/FileList';
import { MdDelete } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { database, ref, set, onValue } from '../../../db'; // Use 'database' consistently

const Home = () => {
  const [type, setType] = useState("text");
  const [menuOpen, setMenuOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [textValue, setTextValue] = useState("");
  const [isText, setIsText] = useState(false);

  const onDrop = acceptedFiles => {
    console.log(acceptedFiles, "acceptedFiles");
    setFiles([...files, ...acceptedFiles]);
  };

  const saveChanges = () => {
    const userId = "your-user-id"; // Replace this with the actual user ID you want to use

    console.log(textValue, "textValue");

    set(ref(database, 'sharing/' + userId), {
      text: textValue,
    })
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
  };

  useEffect(() => {
    const starCountRef = ref(database, 'sharing'); // Use 'database' consistently
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTextValue(data.text);
        if(data.text){
          setIsText(true);
        }
      }
    }, (error) => {
      console.error("Error fetching data:", error);
    });
  }, []); // Add an empty dependency array

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
                <TextArea
                  value={textValue}
                  onChange={(e) => {
                    setTextValue(e.target.value);
                    setIsText(false);
                  }}
                />
              </div>
              <div>
                <Button
                  onClick={() => {
                    setTextValue(""); // Clear the text value in the state
                    const userId = "your-user-id"; // Replace this with the actual user ID you want to use

                    // Clear the data in the database
                    set(ref(database, 'sharing/' + userId), {
                      text: "",
                    })
                    .then(() => {
                      console.log("Data cleared successfully!");
                    })
                    .catch((error) => {
                      console.error("Error clearing data:", error);
                    });
                  }}
                  title={"Clear"} 
                />
                
                  <Button onClick={saveChanges} title={"Save"} />
                
              </div>
            </div>
          ) : (
            <div className='file-section'>
              <div className='file-header'>
                <h1>File</h1>
                <div className='file-btn'>
                  <div>
                    <FaDownload /> 
                    Download All
                  </div>
                  <div onClick={() => setFiles([])} className='btn-download'>
                    <MdDelete />
                    Delete All
                  </div>
                </div>
              </div>
              {files.length ? (
                <FileList files={files} onDrop={onDrop} />
              ) : (
                <DropZone 
                  onDrop={onDrop}
                  textElement={
                    <>
                      Drag and drop any files up to 2 files, 5Mbs each or <span>Browse</span> to get more space
                    </>
                  }
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
