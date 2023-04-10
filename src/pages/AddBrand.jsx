import React from 'react'
import CustomInputs from '../Components/CustomInputs'

const AddBrand = () => {
  return (
    <div>
    <h3 className='mb-4 title'>Add Brand</h3>
    <div>
        <form action="">
            <CustomInputs type="text" label="Enter brand" />
            <button type='submit' className='btn btn-success border-0 rounded-3 my-5'>
            Add Brand
    </button>
        </form>
    </div>
</div>
  )
}

export default AddBrand