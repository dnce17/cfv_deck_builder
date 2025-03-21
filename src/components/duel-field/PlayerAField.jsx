import Zone from './zones/ZoneTemplate'
import PlaceholderCard from '../PlaceholderCard'

import GZone from './zones/GZone'
import RideDeckZone from './zones/RideDeckZone'
import DropZone from './zones/DropZone'
import BindZone from './zones/BindZone'
import DmgZone from './zones/DmgZone'
import OrderZone from './zones/OrderZone'

import CardBack from '../..//assets/imgs/card_back.jpg'

const PlayerAField = ({
  showViewCardsPopup,
  handleZoneToDisplay,
  playerAZones
}) => {

  const player = 'a';

  return (
    <div className='px-2 h-full'>
      <section className='board-a grid grid-cols-3'>
        {/* Dmg + Order Zone */}
        <div className='flex items-end h-full mr-15'>
          <div className='flex h-fit'>
            <GZone 
              player={player}
              showViewCardsPopup={showViewCardsPopup}
              handleZoneToDisplay={handleZoneToDisplay}
              gZoneFaceUp={playerAZones.gZoneFaceUp}
              gZoneFaceDown={playerAZones.gZoneFaceDown}
            />

            <div className='flex flex-col items-center h-full'>
              <OrderZone
                player={player}
                showViewCardsPopup={showViewCardsPopup}
                handleZoneToDisplay={handleZoneToDisplay}
                orderZone={playerAZones.orderZone}
              />
              <DmgZone
                player={player}
                showViewCardsPopup={showViewCardsPopup}
                handleZoneToDisplay={handleZoneToDisplay}
                dmgZone={playerAZones.dmgZone}
              />
            </div>
          </div>
        </div>

        {/* Circles */}
        <div className='flex items-center justify-center relative'>
          <div className='field-zone-a grid grid-rows-2 grid-cols-3 gap-y-9 gap-x-18'>
            <Zone zoneName='front-rc-1-a' placeholderText='RC Front 1' />
            <Zone zoneName='vg-a' placeholderText='VC' />
            <Zone zoneName='front-rc-2-a' placeholderText='RC Front 2' />
            <Zone zoneName='back-rc-1-a' placeholderText='RC Back 1' />
            <Zone zoneName='back-rc-2-a' placeholderText='RC Back 2' />
            <Zone zoneName='back-rc-3-a' placeholderText='RC Back 3' />
          </div>
        </div>

        {/* Deck, Ride, Drop, Bind, Trigger, Crest */}
        <div className='grid grid-rows-3 grid-cols-2 w-fit gap-y-2 gap-x-4 ml-15'>
          {/* Trigger Zone */}
          <Zone
            zoneName='trigger-zone-a'
            size='w-[86.25px] h-[60px]'
            classes='self-end'
            placeholderText='Trigger'
            children={
              <div className='relative w-full h-full flex justify-center items-center'>
                <PlaceholderCard classes='-rotate-90 absolute' />
                <PlaceholderCard classes='-rotate-90 absolute' />
              </div>
            }
          />

          {/* Crest */}
          <Zone zoneName='crest-zone-a' size='w-[86.25px] h-[60px]' classes='self-end' placeholderText='Crest' />

          {/* Deck */}
          <Zone
            zoneName='deck-zone-a'
            placeholderText='Deck'
            children={
              <div className='relative w-full h-full flex justify-center items-center'>
                <img src={CardBack} alt='card back' />
                <p className='absolute bottom-0 font-bold text-xl'>50</p>
              </div>
            }
          />
          
          <RideDeckZone
            player={player}
            showViewCardsPopup={showViewCardsPopup}
            handleZoneToDisplay={handleZoneToDisplay}
            rideDeck={playerAZones.rideDeck}
          />
          <DropZone
            player={player}
            showViewCardsPopup={showViewCardsPopup}
            handleZoneToDisplay={handleZoneToDisplay}
            dropZone={playerAZones.dropZone}
          />
          <BindZone
            player={player}
            showViewCardsPopup={showViewCardsPopup}
            handleZoneToDisplay={handleZoneToDisplay}
            bindZone={playerAZones.bindZone}
          />
        </div>
      </section>
      
      {/* HAND */}
      {/* TODO: Will likely create a Hand component b/c it needs to do stuff */}
      <section className='flex justify-center'>
        {/* <Zone zoneName='hand-zone-a' size='w-[300px] h-[96.25px]' classes='mx-auto' placeholderText='Insert Hand Cards Here' /> */}
        {Array.from({ length: 6 }, (_, i) =>
          <PlaceholderCard />
        )}
      </section>
    </div>
  )
}

export default PlayerAField