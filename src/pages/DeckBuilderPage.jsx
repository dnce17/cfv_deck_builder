import { useState, useEffect } from 'react'
import './DeckBuilderPage.css'

import CardImgArea from '../components/layout-areas/CardImgArea'
import CardInfoArea from '../components/layout-areas/CardInfoArea'
import RatioAndBtnsArea from '../components/layout-areas/RatioAndBtnsArea'
import FilterAndSearch from '../components/layout-areas/FilterAndSearch'
import DeckAndCardListArea from '../components/layout-areas/DeckAndCardListArea'

import InvalidDeckPopup from '../components/PopupInvalidDeck'
import PopupSaveAs from '../components/PopupSaveAs'
import PopupSwitchDeck from '../components/PopupSwitchDeck'

// import CardDb from '../test/test-card-db.json'
import CardDb from '../card-db.json'

// TESTING 
import {
  isMaxTriggerTypeReached,
  getInvalidDeckMsgs,
  isDeckValid,
  isNationMixed
} from '../../helpers'

import Axios from 'axios'

const DeckBuilderPage = () => {

  // TEST SERVER CONNECTION
  const [backendData, setBackendData] = useState([{}]);

  const getData = async() => {
    const res = await Axios.get('http://localhost:5000/api');
    setBackendData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  // Popup Visibility Status
  const [showPopupInvalid, setShowPopupInvalid] = useState(false);
  const [showPopupSaveAs, setShowPopupSaveAs] = useState(false);
  const [showPopupSwitchDeck, setShowPopupSwitchDeck] = useState(false);

  // Getting filtered cards after clicking "Search" btn
  // KEEP
  // const [filterVals, setFilterVals] = useState('');
  const [filterVals, setFilterVals] = useState({});  // TEST USE (so I don't have to click "Search" btn to show cards):
  const [filteredCardList, setFilteredCardList] = useState([]);
  const [resetPagination, setResetPagination] = useState(false);

  const [hoveredCard, setHoveredCard] = useState('');  // Contains card info obj

  const [deckList, setDeckList] = useState({
    mainDeck: [],
    rideDeck: []
  });

  const [deckIssues, setDeckIssues] = useState(getInvalidDeckMsgs(deckList)); 

  // Get deck validity issues
  useEffect(() => {
    setDeckIssues(getInvalidDeckMsgs(deckList));
  }, [deckList]);


  // TEST
  // useEffect(() => {
  //   console.log(deckIssues);
  // }, [deckIssues]);

  // TEST helper.js funcs
  useEffect(() => {
    // SUCCESS TEST
    // const result = isMaxTriggerTypeReached(deckList, 'Critical');
    // --- 

    const result = getInvalidDeckMsgs(deckList);
    const result_2 = isDeckValid(deckList);
    const result_3 = isNationMixed(deckList);

    // console.log(result);
    // console.log(result_2);
    // console.log(result_3);
    // console.log(showPopupInvalid);

  }, [deckList]);

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
    <div className='h-screen flex justify-center items-center relative'>
      {/* NOTE: This popup will be moved to another jsx; I'm just prototyping here */}
      {/* TEST: */}
      {/* {showPopupInvalid == false ? <div>TEST: Do NOT show invalid popup</div> : <div>TEST: SHOW invalid popup</div>} */}

      {showPopupInvalid
        && <InvalidDeckPopup setShowPopupInvalid={setShowPopupInvalid} deckIssues={deckIssues} />
      }

      {showPopupSaveAs
        && <PopupSaveAs setShowPopupSaveAs={setShowPopupSaveAs} />
      }

      {showPopupSwitchDeck
        && <PopupSwitchDeck setShowPopupSwitchDeck={setShowPopupSwitchDeck} />
      }

      <div className='w-[1400px] h-[800px] grid-layout text-white bg-sky-100'>
        <CardImgArea hoveredCard={hoveredCard} />
        <CardInfoArea hoveredCard={hoveredCard} />
        <RatioAndBtnsArea 
          deckList={deckList} 
          setShowPopupSaveAs={setShowPopupSaveAs}
          setShowPopupSwitchDeck={setShowPopupSwitchDeck}
        />
        <FilterAndSearch 
          setFilterVals={setFilterVals} 
          setResetPagination={setResetPagination}
        />
        <DeckAndCardListArea
          filteredCardList={filteredCardList}
          setHoveredCard={setHoveredCard}
          setDeckList={setDeckList}
          deckList={deckList}
          setShowPopupInvalid={setShowPopupInvalid}
          setResetPagination={setResetPagination}
          resetPagination={resetPagination}
        />
      </div>
    </div>
  )
}

export default DeckBuilderPage