import { useState, useEffect } from 'react'
import './DeckBuilderPage.css'

import CardImgArea from '../components/layout-areas/CardImgArea'
import CardInfoArea from '../components/layout-areas/CardInfoArea'
import RatioAndBtnsArea from '../components/layout-areas/RatioAndBtnsArea'
import FilterAndSearch from '../components/layout-areas/FilterAndSearch'
import DeckAndCardListArea from '../components/layout-areas/DeckAndCardListArea'

import PopupInvalidDeck from '../components/PopupInvalidDeck'
import PopupSaveAs from '../components/PopupSaveAs'
import PopupSwitchDeck from '../components/PopupSwitchDeck'
import PopupRenameDeck from '../components/PopupRenameDeck'

import BoxTextInput from '../components/BoxTextInput'

// import CardDb from '../test/test-card-db.json'
import CardDb from '../card-db.json'
import { filterDb } from '../../helpers'

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

  const getData = async () => {
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
  const [showPopupRenameDeck, setShowPopupRenameDeck] = useState(false);

  // Getting filtered cards after clicking "Search" btn
  // KEEP
  // const [filterVals, setFilterVals] = useState('');
  const [filterVals, setFilterVals] = useState({});  // TEST USE (so I don't have to click "Search" btn to show cards):
  const [filteredCardList, setFilteredCardList] = useState([]);
  const [resetPagination, setResetPagination] = useState(false);

  const [hoveredCard, setHoveredCard] = useState('');  // Contains card info obj

  // TODO: Treat deckName as this instead
  // const [currentDeckName, setCurrentDeckName] = useState('Untitled');
  

  const [deckRename, setDeckRename] = useState('');
  const [deckName, setDeckName] = useState('Untitled');  // newDeckName (which can be canceled)
  const [deckList, setDeckList] = useState({
    mainDeck: [],
    rideDeck: []
  });

  console.log(deckList);

  const [deckIssues, setDeckIssues] = useState(getInvalidDeckMsgs(deckList));

  // Get deck validity issues
  useEffect(() => {
    setDeckIssues(getInvalidDeckMsgs(deckList));
  }, [deckList]);

  // Filters Card Database
  useEffect(() => {
    filterDb(setFilteredCardList, filterVals, CardDb);
  }, [filterVals]);

  // --------------- TEST ---------------
  // useEffect(() => {
  //   console.log(deckIssues);
  // }, [deckIssues]);

  // TEST helper.js funcs
  // useEffect(() => {
  //   // SUCCESS TEST
  //   // const result = isMaxTriggerTypeReached(deckList, 'Critical');
  //   // --- 

  //   const result = getInvalidDeckMsgs(deckList);
  //   const result_3 = isNationMixed(deckList);

  //   // console.log(result);
  //   // console.log(result_2);
  //   // console.log(result_3);
  //   // console.log(showPopupInvalid);

  // }, [deckList]);
  // ------------------------------

  return (
    <div className='h-screen flex justify-center items-center relative'>
      {/* NOTE: This popup will be moved to another jsx; I'm just prototyping here */}
      {/* TEST: */}
      {/* {showPopupInvalid == false ? <div>TEST: Do NOT show invalid popup</div> : <div>TEST: SHOW invalid popup</div>} */}

      {showPopupInvalid &&
        <PopupInvalidDeck
          setShowPopupInvalid={setShowPopupInvalid}
          deckIssues={deckIssues}
          deckList={deckList}
          deckName={deckName}
        />
      }
      {showPopupSaveAs && <PopupSaveAs setShowPopupSaveAs={setShowPopupSaveAs} />}
      {showPopupSwitchDeck && <PopupSwitchDeck setShowPopupSwitchDeck={setShowPopupSwitchDeck} setDeckList={setDeckList} />}
      {showPopupRenameDeck &&
        <PopupRenameDeck
          setShowPopupRenameDeck={setShowPopupRenameDeck}
          deckRename={deckRename}
          setDeckRename={setDeckRename}
          clickFunc={() => {
            setDeckName(deckRename.trim());
            setShowPopupRenameDeck(false);
            setDeckRename('');
          }}
        />
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
          deckName={deckName}
          setDeckList={setDeckList}
          deckList={deckList}
          setShowPopupInvalid={setShowPopupInvalid}
          setResetPagination={setResetPagination}
          resetPagination={resetPagination}
          setShowPopupRenameDeck={setShowPopupRenameDeck}
          BoxTextInput={
            // <BoxTextInput
            //   className='bg-[#6CD5EC] border-3 border-[#1E72BE] text-black text-2xl py-2 pl-4 pr-16 text-center w-[300px] rounded-4xl'
            //   currentValue={deckName}
            //   placeholder='Deck Name'
            //   onChange={setDeckName}
            //   headerVisible={false}
            // />
            <div className='flex justify-center items-center bg-[#6CD5EC] border-3 border-[#1E72BE] text-black text-2xl pl-4 pr-16 w-[300px] h-[50px] rounded-4xl'>
              <h1>{deckName}</h1>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default DeckBuilderPage