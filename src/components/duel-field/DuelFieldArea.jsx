import React, { useState, createContext, useContext } from 'react'
import PlayerBField from './PlayerBField'
import PlayerAField from './PlayerAField'
import GuardZone from './GuardZone'

import PlaceholderCard from '../PlaceholderCard'
import ViewCardsPopUp from './ViewCardsPopUp'

import { TEST_DECK, TEST_DROP } from '../../../helpers'

const DuelFieldArea = () => {
  const [playerZones, setPlayerZones] = useState({
    rideDeck: TEST_DECK,
    dropZone: TEST_DROP.concat(TEST_DROP),
    bindZone: TEST_DROP,
    dmgZone: TEST_DROP.concat(TEST_DECK),
    orderZone: TEST_DROP.concat(TEST_DROP)
  });

  // Popup Visibility Status
  const [viewCardsPopup, setViewCardsPopup] = useState(false);
  const [clickedZone, setClickedZone] = useState('? Zone');
  const [cardsToShow, setCardsToShow] = useState([]);

  // Update cardsToShow based on clickedZone (LEARNING GOAL: Not using useEffect to update state)
  const handleZoneToDisplay = (zone) => {
    const zoneLookup = {
      'Ride Deck': playerZones.rideDeck,
      'Drop Zone': playerZones.dropZone,
      'Bind Zone': playerZones.bindZone,
      'Dmg Zone': playerZones.dmgZone,
      'Order Zone': playerZones.orderZone
    };

    setClickedZone(zone);
    setCardsToShow(zoneLookup[zone] || []);
  };

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
            cardsInZone={cardsToShow}
          />
        }

        <PlayerBField />

        {/* Shared Guard Zone */}
        <GuardZone
          children={
            <>
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
          handleZoneToDisplay={handleZoneToDisplay}
          playerZones={playerZones}
        />
      </div>
    </section>
  )
}

export default DuelFieldArea