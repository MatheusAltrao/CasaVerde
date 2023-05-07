import React from 'react'
import './style.css'
import PromotionCard from '../PromotionCard/PromotionCard'
import product1 from '../../assets/produto-01.png'
import product2 from '../../assets/produto-02.png'
import product3 from '../../assets/produto-03.png'
import product4 from '../../assets/produto-04.png'
import product5 from '../../assets/produto-05.png'
import product6 from '../../assets/produto-06.png'

const Promotion = () => {
  return (
    <div className="promotion">
      <header>
        <p className='subtitle opacity'>Conheça nossas</p>
        <h2 className='title'>ofertas</h2>
      </header>

      <div className="promotion-cards max-width">
        <PromotionCard url={product1} title='Ajuga reptans' price='R$ 20,00' />
        <PromotionCard url={product2} title='Cordyline fruticosa' price='R$ 20,00' />
        <PromotionCard url={product3} title='Crassula ovata' price='R$ 20,00' />
        <PromotionCard url={product4} title='Cyperus rotundus' price='R$ 20,00' />
        <PromotionCard url={product5} title='Delairea odorata' price='R$ 20,00' />
        <PromotionCard url={product6} title='Datura metel' price='R$ 20,00' />

      </div>
    </div>
  )
}

export default Promotion