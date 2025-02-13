import { useState, useEffect } from 'react'
import './DeckBuilderPage.css'

import CardImgArea from '../components/layout-areas/CardImgArea'
import CardInfoArea from '../components/layout-areas/CardInfoArea'
import RatioAndBtnsArea from '../components/layout-areas/RatioAndBtnsArea'
import FilterAndSearch from '../components/layout-areas/FilterAndSearch'
import DeckAndCardListArea from '../components/layout-areas/DeckAndCardListArea'

import CardDb from '../test/test-card-db.json'

// https://css-tricks.com/scaled-proportional-blocks-with-css-and-javascript/
// Dueling Book is 1024 x 640

const DeckBuilderPage = () => {
  // useEffect(() => {
  //   const scalePage = () => {
  //     console.log(window.innerWidth);
  //     const scaleFactor = Math.min(window.innerWidth / 1400, window.innerHeight / 800);  // Take lowest size, so no content gets cut off
  //     document.body.style.transform = `scale(${scaleFactor})`;
  //     document.body.style.transformOrigin = 'top left';
  //     document.body.style.width = `${100 / scaleFactor}%`; // Prevent horizontal scroll
  //   };

  //   scalePage();
  //   window.addEventListener('resize', scalePage);

  //   // Cleanup function (runs when component unmounts)
  //   return () => window.removeEventListener('resize', scalePage);
  // }, []);

  // console.log(CardDb);

  const [filterVals, setFilterVals] = useState('');
  console.log(filterVals);

  // 1st is a string, 2nd is number --> either convert it here or adjust TextInputBox jsx to account for it
  console.log(typeof filterVals.grade);
  console.log(typeof CardDb.cards[0].grade);
  
  // for (let card of CardDb.cards) {
  //   for (let info in card) {
  //     console.log(card[info]);
  //   }
  // }

  // useEffect(() => {
  //   // Match all cards based on filter
  //   for (let card of CardDb.cards) {
  //     console.log(card);
  //   }

  // }, [filterVals]);

  return (
    <>
      <div className='w-[1400px] h-[800px] grid-layout text-white bg-black'>
        <CardImgArea />
        <CardInfoArea />
        <RatioAndBtnsArea />
        <FilterAndSearch setFilterVals={setFilterVals} />
        <DeckAndCardListArea />
      </div>
    </>
  )
}

export default DeckBuilderPage