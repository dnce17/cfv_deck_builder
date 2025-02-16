import { useState, useEffect } from 'react'
import './DeckBuilderPage.css'

import CardImgArea from '../components/layout-areas/CardImgArea'
import CardInfoArea from '../components/layout-areas/CardInfoArea'
import RatioAndBtnsArea from '../components/layout-areas/RatioAndBtnsArea'
import FilterAndSearch from '../components/layout-areas/FilterAndSearch'
import DeckAndCardListArea from '../components/layout-areas/DeckAndCardListArea'

import TestUse from '../components/TestUse'

import CardDb from '../test/test-card-db.json'
import { FaSleigh } from 'react-icons/fa6'

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

  const [filterVals, setFilterVals] = useState('');
  const [filteredResults, setFilteredResults] = useState('');

  useEffect(() => {
    const checkTextInputMatch = (card, property) => {
      // NOTE: .includes() already returns true/false
      return card[property].toLowerCase().includes(filterVals[property].trim().toLowerCase());
    }

    const checkSpecialCases = (card, property) => {
      let specialCases = [
        // FORMAT: Filter Val, Substring to detect in filter val
        ['All Units', 'Unit'],
        ['All Orders', 'Order']
      ];

      for (let casePair of specialCases) {
        if (filterVals[property] == casePair[0] && card[property].includes(casePair[1])) {
          return true;
        }
      }

      return false;

      // THE BELOW ALSO WORKS
      // if (filterVals[property] == 'All Units' && !card[property].includes('Unit')) {
      //   return false;
      // }
      // // If filterVals[val] is "All Order" and card[val] does not include substring "Order"
      // else if (filterVals[property] == 'All Orders' && !card[property].includes('Order')) {
      //   return false;
      // }

      // return true;
    }

    const filterTest = (card) => {
      // If even one property does not match, this card will not match at all
      for (let property in filterVals) {
        if (['name', 'text', 'race'].includes(property)) {
          if (checkTextInputMatch(card, property) == false) {
            return false;
          }
        }
        // NOTE: .includes() here is necessary to avoid errors
        // If cardTypes other than "All Units" or "All Orders" is selected, the very last else if below should check that
        else if (property == 'cardType' && ['All Units', 'All Orders'].includes(filterVals[property])) {
          if (checkSpecialCases(card, property) == false) {
            return false;
          }
        }
        else if (filterVals[property] != card[property]) {
          return false;
        }
      }

      return true; // If all checks pass, keep the card
    }

    // Get filtered card list
    setFilteredResults(CardDb.cards.filter(filterTest));

  }, [filterVals]);

  useEffect(() => {
    console.log('----NEW------');
    for (let card of filteredResults) {
      console.log(card.name);
    }
  }, [filteredResults]);

  return (
    <>
      <div className='w-[1400px] h-[800px] grid-layout text-white bg-black'>

        {/* <TestUse /> */}

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