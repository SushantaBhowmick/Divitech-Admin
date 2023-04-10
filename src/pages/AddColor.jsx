import React from 'react'
import CustomInputs from '../Components/CustomInputs'

const AddColor = () => {
  return (
    <div>
        <h3 className='mb-4 title'>Add Colors</h3>
        <div>
            <form action="">
                <CustomInputs type="color" label="Enter Color" />
                <button type='submit' className='btn btn-success border-0 rounded-3 my-5'>
                Add Color
        </button>
            </form>
        </div>
    </div>
  )
}

export default AddColor