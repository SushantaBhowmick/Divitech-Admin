import React, { useState } from 'react'
import CustomInputs from '../Components/CustomInputs'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"

const AddProduct = () => {

  
        const [desc, setDesc] = useState();
        const handleDesc = (e)=>{
          setDesc(e)
        };
  return (
    <div>
        <h3 className="mb-4">Add Product</h3>
        <form action="">
            <CustomInputs type="text" lable="Enter Product Title" />
            <ReactQuill 
      theme='snow'
      value={desc}
      onChange={(evt)=>{
        handleDesc(evt)
      }}
      />
        <button type='submit' className='btn btn-success border-0 rounded-3 my-5'>
            Add Brand
    </button>
        </form>
    </div>
  )
}

export default AddProduct