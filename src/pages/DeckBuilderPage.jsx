import { useEffect } from 'react'
import './DeckBuilderPage.css'

import TestCard from '../assets/imgs/test_card.jpg'
import CardDetail from '../components/CardDetail'
import CardEffect from '../components/CardEffect'
import DeckInfoCard from '../components/DeckInfoCard'
import Divider from '../components/Divider'
import Btn from '../components/Btn'

// https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/

const DeckBuilderPage = () => {
  // useEffect(() => {
  //   const scalePage = () => {
  //     console.log(window.innerWidth);
  //     const scaleFactor = Math.min(window.innerWidth / 1440, window.innerHeight / 800);  // Take lowest size, so no content gets cut off
  //     document.body.style.transform = `scale(${scaleFactor})`;
  //     document.body.style.transformOrigin = 'left center';
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
      <div className='grid-layout grid-cols-3 h-screen text-white bg-black h-full'>
        <section className='cardImg-area bg-green-500 py-1'>
          <img src={TestCard} alt='testCard' className='max-h-[100%] mx-auto rounded-lg' />
        </section>

        <section className='cardInfo-area bg-[#0F232E] flex flex-col border-3 border-[#007C90]'>
          <h1 className='text-center font-bold py-0.5'>Blaster Blade</h1>
          <div className='flex flex-wrap justify-center'>
            <CardDetail header='Grade' info='10' />
            <CardDetail header='Power' info='13000' />
            <CardDetail header='Shield' info='15000' />
            <CardDetail header='Skill' info='Triple Drive' textSize='text-xs' />
            <CardDetail header='Icon' info='Persona Ride' textSize='text-xs' />
            <CardDetail header='Nation' info='Lyrical Monasterio' textSize='text-xs' />
            <CardDetail header='Race' info='Zodiac Time Beast' textSize='text-xs' />
          </div>
          <CardEffect
            text={fillerCardEffect}
          />
        </section>

        <section className='flex ratiosAndBtns-area bg-slate-500'>
          <div className='flex items-center border-2 border-[#E8E8E8] bg-[#9D9D9D]'>
            <div className='flex'>
              <DeckInfoCard header='Deck' info='50' />
              <DeckInfoCard header='Rideline' info='4' />
            </div>
            <Divider />
            <div className='flex'>
              <DeckInfoCard header='Normal Units' info='28' />
              <DeckInfoCard header='Order' info='6' />
              <DeckInfoCard header='Triggers' info='16' />
            </div>
            <Divider />
            <div className='flex'>
              <DeckInfoCard header='Critical' info='8' />
              <DeckInfoCard header='Heal' info='4' />
              <DeckInfoCard header='Draw' info='4' />
              <DeckInfoCard header='Front' info='3' />
              <DeckInfoCard header='Over' info='1' />
            </div>
          </div>
          <div className='bg-pink-500 flex flex-1 justify-end items-center'>
            <Btn text='Test Draw'/>
            <Btn text='Save As' />
            <Btn text='Switch Deck' />
            <Btn
              text='Quit'
              textColor='text-[#CE5D5D]'
              borderColor='border-[#A32B00]'
              dropShadow='drop-shadow-[0px_0px_4px_#A32B00]'
              fromGradient='from-[#662113]'
              toGradient='to-[#3C1812]'
            />
          </div>
        </section>
        <section className='filtersAndSearch-area bg-sky-500'>4</section>
        <section className='deckAndCardList-area bg-orange-500'>5</section>
      </div>
    </>
  )
}

export default DeckBuilderPage