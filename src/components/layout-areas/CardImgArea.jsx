const CardImgArea = ({hoveredCard}) => {
  return (
    <section className='cardImg-area py-1'>
      <img src={hoveredCard.imgPath} alt={hoveredCard.name} className='max-h-[100%] mx-auto rounded-lg' />
    </section>
  )
}

export default CardImgArea