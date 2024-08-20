import React from 'react'
import {useDropzone} from 'react-dropzone'


const DropZone = ({textElement,onDrop}) => {
   
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div className='dropDown' 
    {...getRootProps()}>
      <input {...getInputProps()} />
      
        <div>
        {textElement}
          </div>
    </div>
  )
}

export default DropZone