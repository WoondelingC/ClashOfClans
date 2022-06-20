import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'
import consulta from '../helpers/peticion'

const App = () => {
  
  const [clanes, setClanes] = useState([])
  
  const informacion = async () => {
    const respuesta = await consulta()
    const {items} =  respuesta
    console.log(items);
    setClanes(items)
  }
 
  useEffect(() => {
    informacion()
  },[])

  return (
    <div className='w-75 m-auto'>
        <Header />

      <div className='my-5 p-3 contenedor'> 
        {clanes.map(clan =>{
          const {name, badgeUrls} = clan
          const {small} = badgeUrls
            return <Card key={name} nombre={name} small ={small} />
          })
          }
        </div>
    </div>
  )
}

export default App