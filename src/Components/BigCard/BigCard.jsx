import React from 'react'
import imgBigCard from '../../assets/image 3.png'
import { FaCircle } from 'react-icons/fa'
import './style.css'

const BigCard = () => {
  return (
    <div className="bigcard ">




      <div className="left">
        <div className="image">
          <img src={imgBigCard} alt="" />
        </div>
      </div>

      <div className="right">
        <p className='subtitle opacity bigcard-title  '>Como conseguir</p>
        <h2 className='title'>minha planta</h2>

        <div className="types">

          <div className="type">
            <FaCircle className='ball' />
            <p className='subtitle opacity'>Escolha suas plantas</p>
          </div>

          <div className="type">
            <FaCircle className='ball' />
            <p className='subtitle opacity'>Faça seu pedido</p>
          </div>

          <div className="type">
            <FaCircle className='ball' />
            <p className='subtitle opacity'>Aguarde na sua casa</p>
          </div>

        </div>


      </div>

    </div>
  )
}

export default BigCard