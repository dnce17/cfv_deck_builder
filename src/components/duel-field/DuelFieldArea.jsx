import React, { useState, createContext, useContext } from 'react'
import PlayerBField from './PlayerBField'
import PlayerAField from './PlayerAField'
import GuardZone from './zones/GuardZone'

import PlaceholderCard from '../PlaceholderCard'
import ViewCardsPopUp from './ViewCardsPopUp'
import PhaseBtns from './PhaseBtns'

import { TEST_DECK, TEST_DECK_2, TEST_DROP } from '../../../filler-cards'
import { shuffleDeck } from '../../../helpers'

const DuelFieldArea = () => {
  const [playerAZones, setPlayerAZones] = useState({
    mainDeck: TEST_DECK_2,
    rideDeck: TEST_DECK,
    dropZone: TEST_DROP.concat(TEST_DROP),
    bindZone: TEST_DROP,
    dmgZone: TEST_DROP.concat(TEST_DECK),
    orderZone: TEST_DROP.concat(TEST_DROP),
    gZoneFaceUp: TEST_DROP,
    gZoneFaceDown: TEST_DECK,
    hand: []
  });

  const [playerBZones, setPlayerBZones] = useState({
    rideDeck: TEST_DECK.concat(TEST_DROP),
    dropZone: TEST_DROP,
    bindZone: TEST_DROP.concat(TEST_DECK),
    dmgZone: TEST_DROP.concat(TEST_DECK),
    orderZone: TEST_DROP,
    gZoneFaceUp: TEST_DROP,
    gZoneFaceDown: TEST_DECK
  });

  // Popup Visibility Status
  const [viewCardsPopup, setViewCardsPopup] = useState(false);
  const [clickedZone, setClickedZone] = useState('? Zone');
  const [cardsToShow, setCardsToShow] = useState([]);

  // Update cardsToShow based on clickedZone (LEARNING GOAL: Not using useEffect to update state)
  const handleZoneToDisplay = (zone) => {
    const zoneLookup = {
      // Player A
      'Ride Deck': playerAZones.rideDeck,  // CAUTION: It's Ride DECK, not ZONE
      'Drop Zone': playerAZones.dropZone,
      'Bind Zone': playerAZones.bindZone,
      'Dmg Zone': playerAZones.dmgZone,
      'Order Zone': playerAZones.orderZone,
      'G Zone (Face Up)': playerAZones.gZoneFaceUp,
      'G Zone (Face Down)': playerAZones.gZoneFaceDown,

      // Player B
      "Player B's Ride Deck": playerBZones.rideDeck,
      "Player B's Drop Zone": playerBZones.dropZone,
      "Player B's Bind Zone": playerBZones.bindZone,
      "Player B's Dmg Zone": playerBZones.dmgZone,
      "Player B's Order Zone": playerBZones.orderZone,
      "Player B's G Zone (Face Up)": playerBZones.gZoneFaceUp,
      "Player B's G Zone (Face Down)": playerBZones.gZoneFaceDown,
    };

    setClickedZone(zone);
    setCardsToShow(zoneLookup[zone] || []);
  };

  const showViewCardsPopup = () => {
    setViewCardsPopup(true);
  }

  return (
    <section className='ml-2 field-area text-center bg-sky-800'>
      <div className='relative w-full h-full flex flex-col items-center justify-center'>
        {viewCardsPopup
          && <ViewCardsPopUp
            header={clickedZone}
            setVisibleStatus={setViewCardsPopup}
            cardsInZone={cardsToShow}
          />
        }

        <PhaseBtns />

        {/* <PlayerBField /> */}
        <PlayerBField
          showViewCardsPopup={showViewCardsPopup}
          handleZoneToDisplay={handleZoneToDisplay}
          playerBZones={playerBZones}
        />

        {/* Shared Guard Zone */}
        <GuardZone
          children={
            <>
              <div className='relative w-full h-full flex justify-center items-center'>
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
          playerAZones={playerAZones}
        />
      </div>
    </section>
  )
}

export default DuelFieldArea