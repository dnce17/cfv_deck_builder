import './DeckBuilderPage.css'

const DeckBuilderPage = () => {
  return (
    <>
      <div className='scaler grid-cols-3 grid-rows-4 grid-layout'>
        <section className='cardImg-area bg-green-500'>
          <div className='bg-slate-500 w-[15rem] h-[23rem] mx-auto rounded-2xl'></div>
        </section>
        <section className='cardInfo-area bg-pink-500'></section>
        <section className='deckRatios-area bg-slate-500'>3</section>
        <section className='btns-area bg-pink-200'>4</section>
        <section className='filters-area bg-sky-500'>5</section>
        <section className='deckList-area bg-orange-500'>6</section>
        <section className='cardList-area bg-red-200'>7</section>
      </div>
    </>
  )
}

export default DeckBuilderPage