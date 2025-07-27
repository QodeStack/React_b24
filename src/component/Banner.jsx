import React from 'react'

const Banner = () => {
  return (
    <div className='container '>
        <div className='mx-5 bg-light mt-5 p-5 d-flex flex-column justify-content-center align-items-center gap-3 rounded'>
            <h1 className='fw-bold text-center pt-4'>A warm welcome!</h1>
            <p className='fs-4 text-center w-75'>
                Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
            </p>
            <button className='text-white btn btn-primary w-25 mb-4'>Call to action</button>
        </div>
    </div>
  )
}

export default Banner