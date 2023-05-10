import React from 'react'
import './style.css'
import { MdOutlineEmail } from 'react-icons/md'

const Newslatter = () => {
  return (
    <div className="newsletter">

      <input className='input-newsletter' type="text" placeholder='Insira seu e-mail' />
      <MdOutlineEmail className='icon-email opacity' />
      <button className='buttton-newsletter subtitle'>Assinar</button>
    </div>
  )
}

export default Newslatter