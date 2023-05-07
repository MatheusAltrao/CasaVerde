import React from 'react'
import './style.css'
import { BsArrowRightShort } from 'react-icons/bs';

const PromotionCard = ({ url, title, price }) => {
  return (
    <div className="promotionCard">
      <div className="left">
        <div className="image">
          <img src={url} alt="" />
        </div>
      </div>

      <div className="right">
        <h2 className='title'>{title}</h2>
        <p className='subtitle opacity'>{price}</p>

        <button className='btn-promotion'>Comprar <BsArrowRightShort className='arrow' /> </button>
      </div>
    </div>
  )
}

export default PromotionCard