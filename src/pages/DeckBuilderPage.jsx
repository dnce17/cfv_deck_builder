import { useState, useEffect } from 'react'
import './DeckBuilderPage.css'

import CardImgArea from '../components/layout-areas/CardImgArea'
import CardInfoArea from '../components/layout-areas/CardInfoArea'
import RatioAndBtnsArea from '../components/layout-areas/RatioAndBtnsArea'
import FilterAndSearch from '../components/layout-areas/FilterAndSearch'
import DeckAndCardListArea from '../components/layout-areas/DeckAndCardListArea'

import { isTriggerLimitReached, isMaxTriggerTypeReached } from '../../helpers'

import CardDb from '../test/test-card-db.json'
import InvalidDeckPopup from '../components/InvalidDeckPopup'

const DeckBuilderPage = () => {
  useEffect(() => {
    const scalePage = () => {
      // console.log(window.innerWidth);
      const scaleFactor = Math.min(window.innerWidth / 1400, window.innerHeight / 800);  // Take lowest size, so no content gets cut off
      document.body.style.transform = `scale(${scaleFactor})`;
      document.body.style.transformOrigin = 'top left';
      document.body.style.width = `${100 / scaleFactor}%`; // Prevent horizontal scroll
    };

    scalePage();
    window.addEventListener('resize', scalePage);

    // Cleanup function (runs when component unmounts)
    return () => window.removeEventListener('resize', scalePage);
  }, []);

  // TEST USE (so I don't have to click "Search" btn to show cards):
  const [filterVals, setFilterVals] = useState(true);

  // KEEP
  // const [filterVals, setFilterVals] = useState('');
  const [filteredCardList, setFilteredCardList] = useState([]);
  const [hoveredCard, setHoveredCard] = useState('');  // Contains card info obj

  const [deckList, setDeckList] = useState({
    mainDeck: [],
    rideDeck: []
  });

  // Filters Card Database
  useEffect(() => {
    const checkTextInputMatch = (card, property) => {
      // NOTE: .includes() already returns true/false
      return card[property].toLowerCase().includes(filterVals[property].trim().toLowerCase());
    }

    const checkSpecialCases = (card, property) => {
      let specialCases = [
        // FORMAT: [Filter Val, Substring] to detect in filter val
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
    <div className='relative w-fit'>
      {/* NOTE: This popup will be moved to another jsx; I'm just prototyping here */}
      {/* <InvalidDeckPopup />/ */}

      <div className='w-[1400px] h-[800px] grid-layout text-white bg-black'>
        <CardImgArea hoveredCard={hoveredCard} />
        <CardInfoArea hoveredCard={hoveredCard} />
        <RatioAndBtnsArea deckList={deckList} />
        <FilterAndSearch setFilterVals={setFilterVals} />
        <DeckAndCardListArea
          filteredCardList={filteredCardList}
          setHoveredCard={setHoveredCard}
          setDeckList={setDeckList}
          deckList={deckList}
        />
      </div>
    </div>
  )
}

export default DeckBuilderPage