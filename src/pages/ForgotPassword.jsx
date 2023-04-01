import React from 'react'
import CustomInputs from '../Components/CustomInputs'

const Login = () => {
  return (
    <>
    <div className="py-5" style={{background:"#ffd333",minHeight:"100vh"}}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center' style={{color:"#777777"}}>Please enter your register email to get reset password mail</p>
        <form action="">
        <CustomInputs type="text" label="Email Address" id='email' />
        <button 
        className='border-0 px-3 py-2 text-white fw-bold w-100' 
        style={{background:"#ffd333"}}
        type='submit'
        >
          Send Link
        </button>
        </form>
      </div>
    </div>
    </>
    
  )
}

export default Login