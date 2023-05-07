import React from 'react'
import './style.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="max-width">


        <div className="logo">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
        </div>

        <ul className='header-list subtitle'>
          <li><a href="#">Como Fazer</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Depoimentos</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Meu Carrinho</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header