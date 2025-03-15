const CardImgArea = ({hoveredCard, gridArea=''}) => {
  return (
    <section className={`${gridArea} py-1`}>
      <img src={hoveredCard.imgPath} alt={hoveredCard.name} className='max-h-[100%] mx-auto rounded-lg' />
    </section>
  )
}

export default CardImgArea