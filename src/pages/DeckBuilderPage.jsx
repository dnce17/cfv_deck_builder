import { useState, useEffect, useRef } from 'react'
import './DeckBuilderPage.css'

import CardImgArea from '../components/layout-areas/CardImgArea'
import CardInfoArea from '../components/layout-areas/CardInfoArea'
import RatioAndBtnsArea from '../components/layout-areas/RatioAndBtnsArea'
import FilterAndSearch from '../components/layout-areas/FilterAndSearch'
import DeckAndCardListArea from '../components/layout-areas/DeckAndCardListArea'

import TestUse from '../components/TestUse'

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

  // TEST USE
  const [filterVals, setFilterVals] = useState(true);

  // 
  // const [filterVals, setFilterVals] = useState('');
  const [filteredCardList, setFilteredCardList] = useState([]);

  const [hoveredCard, setHoveredCard] = useState('');  // Contains card info obj
  const [deckList, setDeckList] = useState([]);
  // const [deckList, setDeckList] = useState([
  //   {
  //     "id": 1,
  //     "name": "In the Calm Sunlight, Tamayura",
  //     "imgPath": "./src/test/img/1_in_the_calm_sunlight_tamayura.jpg",
  //     "grade": 1,
  //     "skill": "Boost",
  //     "icon": "",
  //     "power": 8000,
  //     "critical": 1,
  //     "shield": 5000,
  //     "nation": "Dragon Empire",
  //     "clan": "",
  //     "race": "Warbeast",
  //     "cardType": "Normal Unit",
  //     "triggerType": "",
  //     "triggerEffect": "",
  //     "rideline": true,
  //     "format": "Standard/Preminum",
  //     "text": "[AUTO]:When this unit is placed by riding from 'Nine-tailed Fox Spirit, Tamayura', look at the top seven cards of your deck, choose up to one card with 'Ririmi' or 'Rarami' in its card name or a Fox Art card from among them, reveal it and put it into your hand, and shuffle your deck.\n[Glitter](This card is a [Glitter] which seeks the Fire Regalis)"
  //   }
  // ]);
  // const [rideDeckList, setRideDeckList] = useState([]);
  // const [deckList, setDeckList] = useState({
  //   mainDeck: [],
  //   rideDeck: []
  // });

  // console.log(deckList);

  useEffect(() => {
    // TEST: Check index of each item in decklist
    console.log('----NEW--------');
    for (let card of deckList) {
      console.log(`${card.arrIndex}: ${card.name}`);
    }
  }, [deckList])

  // Filters Card Database
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

    // NOTE: filterVals has default value of falsy (e.g. '') rather than truthy (e.g. {} or [])
    // to ensure filter doesn't run on initial render and cause entire card db to be loaded
    if (filterVals) {
      setFilteredCardList(CardDb.cards.filter(filterTest));
    }

  }, [filterVals]);

  return (
    <>
      <div className='w-[1400px] h-[800px] grid-layout text-white bg-black'>

        {/* <TestUse /> */}

        <CardImgArea hoveredCard={hoveredCard}/>
        <CardInfoArea hoveredCard={hoveredCard}/>
        <RatioAndBtnsArea />
        <FilterAndSearch setFilterVals={setFilterVals} />
        <DeckAndCardListArea 
          filteredCardList={filteredCardList} 
          setHoveredCard={setHoveredCard}
          setDeckList={setDeckList}
          deckList={deckList}
        />
      </div>
    </>
  )
}

export default DeckBuilderPage