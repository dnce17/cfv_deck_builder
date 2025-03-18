import PlayerBField from './PlayerBField'
import PlayerAField from './PlayerAField'
import GuardZone from './GuardZone'

import PlaceholderCard from '../PlaceholderCard'

const DuelFieldArea = () => {
  return (
    <section className='ml-2 field-area text-center bg-sky-600'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
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