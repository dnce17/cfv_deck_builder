import PlayerBField from './PlayerBField'
import PlayerAField from './PlayerAField'
import GuardZone from './GuardZone'

import PlaceholderCard from '../PlaceholderCard'
import PopupTemplate from '../popups/PopupTemplate'

const DuelFieldArea = ({ header='G Zone' }) => {

  return (
    <section className='ml-2 field-area text-center bg-sky-600'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        {/* Formatting View Popup */}
        <PopupTemplate
          height='max-h-[380px]'
          children={
            // APPROACH 1: Grid
            // <div className='h-full overflow-y-auto'>
            //   <h1 className='text-xl my-1'>{header}</h1>
            //   <div className='grid grid-cols-8 auto-rows-auto gap-y-2 place-items-center pb-2'>
            //     {Array.from({ length: 4 }, (_, i) =>
            //       <PlaceholderCard />
            //     )}
            //   </div>
            // </div>

            // APPROACH 2: Flex
            <div className='flex flex-col h-full overflow-y-auto'>
              <h1 className='text-xl my-1'>{header}</h1>
              <div className='flex flex-wrap justify-center gap-5 pb-2'>
                {Array.from({ length: 8 }, (_, i) =>
                  <PlaceholderCard />
                )}
              </div>
            </div>
          }
        />

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

        <PlayerAField />
      </div>
    </section>
  )
}

export default DuelFieldArea