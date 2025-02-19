import React from 'react'
import TestCard from '../../assets/imgs/test_card.jpg'

const CardImgArea = ({hoveredCard}) => {
  return (
    <section className='cardImg-area bg-green-500 py-1'>
      {/* <img src={TestCard} alt='testCard' className='max-h-[100%] mx-auto rounded-lg' /> */}
      <img src={hoveredCard.imgPath} alt={hoveredCard.name} className='max-h-[100%] mx-auto rounded-lg' />
    </section>
  )
}

export default CardImgArea