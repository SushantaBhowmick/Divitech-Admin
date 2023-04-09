import React from 'react'
import CustomInputs from '../Components/CustomInputs'

const AddCat = () => {
  return (
    <div>
        <h3 className='mb-4'>Add Blog Categories</h3>
        <div>
            <form action="">
                <CustomInputs type="text" label="Enter Category" />
                <button type='submit' className='btn btn-success border-0 rounded-3 my-5'>
                Add Category
        </button>
            </form>
        </div>
    </div>
  )
}

export default AddCat