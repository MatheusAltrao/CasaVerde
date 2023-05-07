import React from 'react'
import './style.css'
import Newslatter from '../Newslatter/Newslatter'

const Home = () => {
  return (
    <div className="home">
      <div className="max-width">
        <div className="left">
          <h2 className='subtitle opacity'>Sua casa com as </h2>
          <h1 className='title'>melhores <br />
            plantas
          </h1>

          <p className='subtitle opacity'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

          <Newslatter />
        </div>




      </div>
    </div>
  )
}

export default Home