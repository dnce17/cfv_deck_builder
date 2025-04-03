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

  const getDefaultDeck = async (setDeckName, setDeckList) => {
    const res = await Axios.get('http://localhost:5000/api/get-default-deck');
    setDeckName(res.data.deckName);
    setDeckList({
      mainDeck: res.data.mainDeck,
      rideDeck: res.data.rideDeck
    });
  }

  const renameDeck = async (nameData) => {
    try {
      const res = await Axios.post('http://localhost:5000/api/rename-deck', nameData);
      console.log('Send Deck Name Status: ', res.data);
      return res.data;

    } catch (err) {
      console.error('Error sending deck name to server:', err);
    }
  }

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

  const [deckRename, setDeckRename] = useState('');
  const [nameTaken, setNameTaken] = useState(false);

  const [deckName, setDeckName] = useState('');  // newDeckName (which can be canceled)
  const [deckList, setDeckList] = useState({
    mainDeck: [],
    rideDeck: []
  });

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

  useEffect(() => {
    getDefaultDeck(setDeckName, setDeckList);
  }, []);

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
      {showPopupSwitchDeck &&
        <PopupSwitchDeck
          setShowPopupSwitchDeck={setShowPopupSwitchDeck}
          setDeckList={setDeckList}
          setDeckName={setDeckName}
        />
      }
      {showPopupRenameDeck &&
        <PopupRenameDeck
          setShowPopupRenameDeck={setShowPopupRenameDeck}
          deckRename={deckRename}
          setDeckRename={setDeckRename}
          nameTaken={nameTaken}
          setNameTaken={setNameTaken}
          clickFunc={async () => {
            // Send the name to the server to see if name already exist
            const status = await renameDeck({
              deckRename: deckRename.trim(),
              deckName: deckName
            });

            console.log(status);
            if (status == false) {
              // Show message that name is taken
              setNameTaken(true);
              return;
            }

            console.log('Name NOT TAKEN')
            setNameTaken(false);
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