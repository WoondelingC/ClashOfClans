import axios from 'axios';
import React, { useEffect, useState } from 'react'
import consulta from '../helpers/peticion'



const Card = ({small, nombre}: any) => {
  
  return (
   
    <div className="card my-4 cards">
      <img src={small} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title">{nombre}</p>
      </div>
    </div> 

  )
}

export default Card


