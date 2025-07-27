import React from 'react'

const Item = () => {
  return (
    <div className='my-5 py-5'>
        <div className='mx-auto row text-center justify-content-center gap-5'>
            <div className='bg-light col-4 py-4 px-5 position-relative rounded'>
                <div className='bg-primary d-inline py-2 px-3 rounded position-absolute' style={{top:'-40px',left:'50%',transform: 'translateX(-50%)'}}>
                    <i class="bi bi-collection text-white fs-3"></i>
                </div>
                <h1 className='fs-3 my-3'>Fresh new layout</h1>
                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
            </div>
             <div className='bg-light col-4 py-3 px-5 position-relative rounded'>
                <div className='bg-primary d-inline py-2 px-3 rounded position-absolute' style={{top:'-40px',left:'50%',transform: 'translateX(-50%)'}}>
                    <i class="bi bi-cloud-download text-white fs-3"></i>
                </div>
                <h1 className='fs-3 my-3'>Free to download</h1>
                <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
            </div>
        </div>
        <div className='mx-auto row text-center justify-content-center gap-5 my-5'>
            <div className='bg-light col-4 py-4 px-5 position-relative rounded'>
                <div className='bg-primary d-inline py-2 px-3 rounded position-absolute' style={{top:'-40px',left:'50%',transform: 'translateX(-50%)'}}>
                    <i class="bi bi-card-heading text-white fs-3"></i>
                </div>
                <h1 className='fs-3 my-3'>Jumbotron hero header</h1>
                <p>The heroic part of this template is the jumbotron hero header!</p>
            </div>
             <div className='bg-light col-4 py-3 px-5 position-relative rounded'>
                <div className='bg-primary d-inline py-2 px-3 rounded position-absolute' style={{top:'-40px',left:'50%',transform: 'translateX(-50%)'}}>
                    <i class="bi bi-bootstrap text-white fs-3"></i>
                </div>
                <h1 className='fs-3 my-3'>Feature boxes</h1>
                <p>We've created some custom feature boxes using Bootstrap icons!</p>
            </div>
        </div>
        <div className='mx-auto row text-center justify-content-center gap-5'>
            <div className='bg-light col-4 py-4 px-5 position-relative rounded'>
                <div className='bg-primary d-inline py-2 px-3 rounded position-absolute' style={{top:'-40px',left:'50%',transform: 'translateX(-50%)'}}>
                    <i class="bi bi-code text-white fs-3"></i>
                </div>
                <h1 className='fs-3 my-3'>Simple clean code</h1>
                <p>We keep our dependencies up to date and squash bugs as they come!</p>
            </div>
             <div className='bg-light col-4 py-3 px-5 position-relative rounded'>
                <div className='bg-primary d-inline py-2 px-3 rounded position-absolute' style={{top:'-40px',left:'50%',transform: 'translateX(-50%)'}}>
                    <i class="bi bi-patch-check text-white fs-3"></i>
                </div>
                <h1 className='fs-3 my-3'>A name you trust</h1>
                <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
            </div>
        </div>
    </div>
  )
}

export default Item