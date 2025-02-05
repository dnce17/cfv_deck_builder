import { useEffect } from 'react'
import './DeckBuilderPage.css'

import TestCard from '../assets/imgs/test_card.jpg'
import CardDetail from '../components/CardDetail'
import CardEffect from '../components/CardEffect'

// https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/

const DeckBuilderPage = () => {
  // useEffect(() => {
  //   const scalePage = () => {
  //     const scaleFactor = Math.min(window.innerWidth / 1280, window.innerHeight / 720);  // Take lowest size, so no content gets cut off
  //     document.body.style.transform = `scale(${scaleFactor})`;
  //     document.body.style.transformOrigin = 'top left';
  //     document.body.style.width = `${100 / scaleFactor}%`; // Prevent horizontal scroll
  //   };

  //   scalePage();
  //   window.addEventListener('resize', scalePage);

  //   // Cleanup function (runs when component unmounts)
  //   return () => window.removeEventListener('resize', scalePage);
  // }, []);

  const fillerCardEffect = "[AUTO]:[Counter Blast (2)] When this unit is placed on (VC), you may pay the cost. If you do, choose one of your opponent's rear-guards, and retire it. [AUTO]:[Counter Blast (2)] When this unit is placed on (RC), if you have a «Royal Paladin» vanguard, you may pay the cost. If you do, choose one of your opponent's grade 2 or greater rear-guards, and retire it.";

  return (
    <>
      <div className='grid-layout grid-cols-3 h-screen text-white'>
        <section className='cardImg-area bg-green-500 py-1'>
          <img src={TestCard} alt='testCard' className='h-[100%] mx-auto rounded-lg' />
        </section>

        <section className='cardInfo-area bg-[#0F232E] flex flex-col border-3 border-[#007C90]'>
          <h1 className='text-center font-bold py-0.5'>Blaster Blade</h1>
          <div className='flex flex-wrap justify-center'>
            <CardDetail header='Grade' info='10'/>
            <CardDetail header='Power' info='13000'/>
            <CardDetail header='Shield' info='15000'/>
            <CardDetail header='Skill' info='Triple Drive' textSize='text-xs'/>
            <CardDetail header='Icon' info='Persona Ride' textSize='text-xs'/>
            <CardDetail header='Nation' info='Lyrical Monasterio' textSize='text-xs'/>
            <CardDetail header='Race' info='Zodiac Time Beast' textSize='text-xs'/>
          </div>
          <CardEffect
            text={fillerCardEffect}
          />
        </section>

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