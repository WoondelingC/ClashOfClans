import React, { useEffect } from 'react'
import consulta from '../helpers/peticion'



const Card = () => {
 
  useEffect(() => {
    consulta()
  }, [])
  

  return (
    <div className='d-flex justify-content-between my-5 p-3 contenedor'>
      <div className="card w-25 my-4 card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>

      <div className="card w-25 my-4 card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>

      <div className="card w-25 my-4 card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
        </div>
      </div>
    </div>
  )
}

export default Card


