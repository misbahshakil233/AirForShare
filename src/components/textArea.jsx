// import React, { useState, useEffect, useRef } from 'react';


// const TextArea = () => {
//   const [content, setContent] = useState("");
//   const textAreaRef = useRef(null);

//   useEffect(() => {
//     if (textAreaRef.current) {
//       textAreaRef.current.style.height = "auto";
//       textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
//     }
//   }, [content]);

//   return (
//     <textarea 
//       ref={textAreaRef}
//       placeholder="Type something..." 
//       style={{
//         border: "none",
//         outline: "none",
//         resize: "none",
//         fontSize: "22px",
//         letterSpacing: "-0.7px",
//         color: "#e21313",
//         width: "100%",
//         padding: "10px",
//         boxSizing: "border-box",
//         background: "transparent",
//         overflow: "hidden",  // Hide scrollbar
//         minHeight: "100px",  // Minimum height to start with
//       }}
//       className='text-area'
//       value={content}
//       onChange={(e) => setContent(e.target.value)}
//     />
//   );
// };

// export default TextArea;


// TextArea.js
import React, { useEffect, useRef } from 'react';

const TextArea = ({ value, onChange }) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  }, [value]);

  return (
    <textarea 
      ref={textAreaRef}
      placeholder="Type something..." 
      style={{
        border: "none",
        outline: "none",
        resize: "none",
        fontSize: "22px",
        letterSpacing: "-0.7px",
        color: "#e21313",
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        background: "transparent",
        overflow: "hidden",  // Hide scrollbar
        minHeight: "100px",  // Minimum height to start with
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
