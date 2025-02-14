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

  const [filterVals, setFilterVals] = useState('');
  const [filteredResults, setFilteredResults] = useState('');

  // Get filtered card list
  useEffect(() => {
    // CAUTION: of vs in - for the loops
    let filteredCardList = [];
    // For each filter val
    for (let card of CardDb.cards) {
      // For each card in the data base
      let foundNonMatch = false;
      for (let val in filterVals) {
        // KEY: If even ONE property does not match a val, BREAK go to the next card
        // If val == name, text, and race (TEXT INPUTS)
        if (['name', 'text', 'race'].includes(val)) {
          // if val's substring is NOT in card's while string
          // BREAK to the next card
          if (card[val].toLowerCase().includes(filterVals[val].trim().toLowerCase()) == false) {
            console.log(`BREAK: ${filterVals[val]} is not ${card[val]}`);
            foundNonMatch = true;
            break;
          }
        }
        // if val == rideline (CHECKBOX)
        else if (val == 'rideline') {
          // NOTE: ONLY need to check this if filterVal[val] is true (checked)
          // Break if the filterVals[val] is false or '', meaning we don't want ridelineOnly
          if (!filterVals.rideline) {
            console.log(`BREAK: ${filterVals[val]} is not ${card[val]}`);
            foundNonMatch = true;
            break;
          }
          // Otherwise, we do need to check if the CARD's rideline is NOT true since we do want ridelineOnly
          else if (filterVals[val] != card[val]) {
            console.log(`BREAK: ${filterVals[val]} is not ${card[val]}`);
            foundNonMatch = true;
            break;
          }
        }
        
        // Special cases - All Unit, All Order 
        // Check for "Unit" and "Order" substring in cardType
        else if (val == 'cardType' && (filterVals[val] == 'All Units' || filterVals[val] == 'All Orders')) {
          // If filterVals[val] is "All Units" and card[val] does not include substring "Unit"
          if (filterVals[val] == 'All Units' && !card[val].includes('Unit')) {
            foundNonMatch = true;
            break;
          }
          // If filterVals[val] is "All Order" and card[val] does not include substring "Order"
          else if (filterVals[val] == 'All Orders' && !card[val].includes('Order')) {
            foundNonMatch = true;
            break;
          }
        }
        // This should be the very last thing in this if else chain
        else if (filterVals[val] != card[val]) {
          console.log(`BREAK: ${filterVals[val]} is not ${card[val]}`);
          foundNonMatch = true;
          break;
        }
      }

      if (!foundNonMatch) {
        filteredCardList.push(card);
      }
    }

    console.log(filteredCardList);
  }, [filterVals]);


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