import React from 'react';
import { ImFilesEmpty } from "react-icons/im";
import DropZone from './DropZone';
import { LuPlus } from "react-icons/lu";
import { FaHtml5, FaCss3Alt, FaImages, FaVideo } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const FileList = ({ files, onDrop }) => {
  console.log(files, "files");

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        className='file-list'
        style={{
          display: "flex",
          flexDirection: "row", // Change to row to align items horizontally
          width: "auto",
          height: "auto",
          alignItems: "center",
          justifyContent: "flex-start", // Align items to the start of the container
          marginRight: "10px",
          flexWrap: "wrap", // Allow wrapping to handle overflow
          gap:"10px"
        }}
      >
        {files.map((v, i) => {
          let icon;
          switch (v.type) {
            case "text/html":
              icon = <FaHtml5 style={{ fontSize: "100px" ,border:"2px solid black"}} />;
              break;
            case "text/image":
              icon = <FaImages style={{ fontSize: "100px",border:"2px solid black" }} />;
              break;
            case "text/css":
              icon = <FaCss3Alt style={{ fontSize: "100px",border:"2px solid black" }} />;
              break;
            case "text/javascript":
              icon = <IoLogoJavascript style={{ fontSize: "100px",border:"2px solid black" }} />;
              break;
            case "text/video":
              icon = <FaVideo style={{ fontSize: "100px",border:"2px solid black" }} />;
              break;
            default:
              icon = <ImFilesEmpty style={{ fontSize: "100px",border:"2px solid black" }} />;
              break;
          }

          return (
            <div key={i} style={{ margin: "5px" }}>
              {v.type.indexOf("image") !== -1 ? (
                <img
                  style={{ objectFit: "cover", width: "80px", height: "80px" }} // Adjust size
                  src={URL.createObjectURL(v)}
                  alt=""
                />
              ) : (
                <>
                  {icon}
                  <span style={{ fontSize: "10px" }}>
                    {v.name.slice(0, 10)}{v.name.slice(v.name.lastIndexOf("."))}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100px",
          height: "100px",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.1)"}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
      >
        <DropZone
          onDrop={onDrop}
          textElement={
            <span>
              <LuPlus />
              <br />
              Add file
            </span>
          }
        />
      </div>
    </div>
  );
};

export default FileList;
