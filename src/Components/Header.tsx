import React from 'react'
import portada from '../assets/portada.jpg'

const Header = () => {

  return (
    <>
        <div>
            <h1 className='text-center'>CLASH OF CLANS</h1>
            <img src={portada} alt="" className='w-100 my-4 portada' />
        </div>
        <div className="input-group-lg mt-4">
            <h3 className="text-center" id="inputGroup-sizing-lg">Encuentra tu Clan</h3>
            <input 
                  type="text" 
                  className="form-control" 
                  aria-label="Sizing example input" 
                  aria-describedby="inputGroup-sizing-lg"
                  //onChange={search}
                  />
        </div>
    </>

  )
}

export default Header