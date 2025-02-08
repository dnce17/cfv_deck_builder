import { useState, useEffect } from 'react'
import './DeckBuilderPage.css'

import TestCard from '../assets/imgs/test_card.jpg'
import CardDetail from '../components/CardDetail'
import CardEffect from '../components/CardEffect'
import DeckRatioCard from '../components/DeckRatioCard'
import FilterCard from '../components/FilterCard'
import Divider from '../components/Divider'
import Btn from '../components/Btn'
import InputBox from '../components/InputBox'
import SearchBtn from '../components/SearchBtn'

import { RxTriangleLeft, RxTriangleRight } from "react-icons/rx";
import { FaPencil } from "react-icons/fa6";

import PlaceholderCard from '../components/PlaceholderCard'

// https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/
// Dueling Book is 1024 x 640

const DeckBuilderPage = () => {
  // useEffect(() => {
  //   const scalePage = () => {
  //     console.log(window.innerWidth);
  //     const scaleFactor = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);  // Take lowest size, so no content gets cut off
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
      {/* <div className='w-[1024px] h-[640px] grid-layout grid-cols-3 text-white bg-black'> */}
      <div className='w-[1400px] h-[800px] grid-layout text-white bg-black'>
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
              <DeckRatioCard header='Deck' info='50' />
              <DeckRatioCard header='Rideline' info='4' />
            </div>
            <Divider />
            <div className='flex'>
              <DeckRatioCard header='Normal Units' info='28' />
              <DeckRatioCard header='Order' info='6' />
              <DeckRatioCard header='Triggers' info='16' />
            </div>
            <Divider />
            <div className='flex'>
              <DeckRatioCard header='Critical' info='8' />
              <DeckRatioCard header='Heal' info='4' />
              <DeckRatioCard header='Draw' info='4' />
              <DeckRatioCard header='Front' info='3' />
              <DeckRatioCard header='Over' info='1' />
            </div>
          </div>
          <div className='bg-pink-500 flex flex-1 justify-end items-center'>
            <Btn text='Test Draw' />
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

        <section className='filtersAndSearch-area bg-[#1A263D] border border-[#26519A] flex justify-evenly'>
          <div className='flex flex-col justify-evenly'>
            {/* w-[130px] h-[65px] for the boxes that may have long words if you wanna revert back to that */}
            <FilterCard header='Trigger Type' info='Critical' infoBoxDimensions='w-[100px]' />
            {/* TODO: Add "View Ridelines" filter here */}
          </div>
          <div className='flex flex-col justify-evenly'>
            <FilterCard header='Nation' info='Lyrical Monasterio' infoBoxDimensions='w-[180px]' />
            <FilterCard header='Race' info='Zodiac Time Beast' infoBoxDimensions='w-[180px]' />
          </div>
          <div className='flex flex-col justify-evenly'>
            <FilterCard header='Grade' info='10' infoBoxDimensions='w-[50px]' />
            <FilterCard header='Card Type' info='Normal Order' infoBoxDimensions='w-[140px]' />
          </div>
          <div className='flex flex-col items-center justify-evenly'>
            <InputBox placeholder='Card Name' />
            <InputBox placeholder='Card Text' />
            <SearchBtn />
          </div>
        </section>

        <section className='deckAndCardList-area flex'>
          {/* Note: Do NOT add space after comma in repeat(); Tailwind will actually interpret it wrong */}
          <div className='grid grid-rows-[0.8fr_repeat(5,1fr)] w-[70%] border-3 border-[#007C90] h-full'>
            <div className='bg-linear-to-t from-[#00627A] to-[#05374F] border-b-3 border-[#007C90] flex justify-evenly items-center'>
              <Btn
                text='Clear'
                textColor='text-[#BFB456]'
                borderColor='border-[#857D30]'
                dropShadow='drop-shadow-[0px_0px_4px_#4B3A0B]'
                fromGradient='from-[#AC951E]'
                toGradient='to-[#4B3A0B]'
              />
              <div className='flex relative'>
                <input
                  type='text'
                  value='Untitled'
                  className='bg-[#6CC6EC] border-3 border-[#1E72BE] text-black text-2xl py-2 pl-4 pr-16 text-center w-[300px] rounded-4xl'
                />
                <FaPencil size={60} className='absolute right-0 top-[50%] translate-y-[-50%] rounded-[50%] bg-[#004996] p-3 overflow-visible border-3 border-[#1E72BE]' />
              </div>
              <Btn
                text='Save'
                textColor='text-[#23AD5C]'
                borderColor='border-[#2A824B]'
                dropShadow='drop-shadow-[0px_0px_4px_#10361A]'
                fromGradient='from-[#0F8631]'
                toGradient='to-[#10361A]'
              />
            </div>
            {/* <div className='bg-green-800 row-span-3 p-2 grid grid-cols-8 gap-[5px] auto-rows-max'> */}
            <div className='bg-[#0F232E] row-span-3 p-2 grid grid-cols-10 gap-2 auto-rows-max overflow-y-auto'>
              {Array.from({ length: 20 }, (_, i) =>
                <PlaceholderCard />
              )}
            </div>
            <div className='bg-[#0F232E] border-y-3 border-[#007C90] flex items-center pl-2 gap-2'>
              {Array.from({ length: 4 }, (_, i) =>
                <PlaceholderCard />
              )}
            </div>
            <div className='bg-[#0F232E] flex items-center pl-2 gap-2'>
              {Array.from({ length: 5 }, (_, i) =>
                <PlaceholderCard />
              )}
            </div>
          </div>

          <div className='bg-[#0F232E] border-3 border-[#007C90] flex items-center flex-col flex-1'>
            <div className='flex items-center'>
              <RxTriangleLeft size={50} />
              <p className='text-3xl'>1/10</p>
              <RxTriangleRight size={50} />
            </div>
            <div className='grid grid-cols-4 p-2 gap-x-3 gap-y-5 auto-rows-max'>
              {Array.from({ length: 20 }, (_, i) =>
                <PlaceholderCard />
              )}
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default DeckBuilderPage