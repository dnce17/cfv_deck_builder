import React, { useState, createContext, useContext } from 'react'
import PlayerBField from './PlayerBField'
import PlayerAField from './PlayerAField'
import GuardZone from './GuardZone'

import PlaceholderCard from '../PlaceholderCard'
import ViewCardsPopUp from './ViewCardsPopUp'

import { TEST_DECK, TEST_DROP } from '../../../helpers'

const DuelFieldArea = () => {

  const [rideDeck, setRideDeck] = useState(TEST_DECK);
  const [drop, setDrop] = useState(TEST_DROP);

  // Popup Visibility Status
  const [viewCardsPopup, setViewCardsPopup] = useState(false);
  const [clickedZone, setClickedZone] = useState('? Zone');
  const [cardsToShow, setCardsToShow] = useState([]);

  // Update cardsToShow based on clickedZone (LEARNING GOAL: Not using useEffect to update state)
  const handleZoneToDisplay = (zone) => {
    setClickedZone(zone);
    
    switch (zone) {
      case 'Ride Deck':
        setCardsToShow(rideDeck);
        break;
      case 'Drop Zone':
        setCardsToShow(drop);
        break;
      default:
        setCardsToShow([]);
        break;
    }
  };

  console.log(clickedZone);
  console.log(cardsToShow);

  const showViewCardsPopup = () => {
    setViewCardsPopup(true);
  }

  return (
    <section className='ml-2 field-area text-center bg-sky-600'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        {viewCardsPopup
          && <ViewCardsPopUp
            header={clickedZone}
            setVisibleStatus={setViewCardsPopup}

            // FUTURE: Add conditions based on clickedZone
            cardsInZone={cardsToShow}
          />
        }

        <PlayerBField />

        {/* Shared Guard Zone */}
        <GuardZone
          children={
            <>
              {/* <div className='w-[86.25px] h-[60px] bg-orange-500 rounded-lg'>Guard</div>
              <div className='w-[86.25px] h-[60px] -ml-[40px] z-10 bg-red-500 rounded-lg'>Guard</div>
              <div className='w-[86.25px] h-[60px] -ml-[40px] z-10 bg-sky-500 rounded-lg'>Guard</div> */}
              <div className='relative bg-sky-500 w-full h-full flex justify-center items-center'>
                {Array.from({ length: 6 }, (_, i) =>
                  <PlaceholderCard classes='-rotate-90' />
                )}
              </div>
            </>
          }
        />

        <PlayerAField
          showViewCardsPopup={showViewCardsPopup}
          // setClickedZone={setClickedZone}
          handleZoneToDisplay={handleZoneToDisplay}
          rideDeck={rideDeck}
          drop={drop}
        />
      </div>
    </section>
  )
}

export default DuelFieldArea