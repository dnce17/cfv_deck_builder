import { useState } from 'react'
import { RxTriangleLeft, RxTriangleRight } from 'react-icons/rx'

import { paginate } from '../../helpers';

const CardListSection = ({ cardsToDisplay }) => {
  const [currentPg, setCurrentPg] = useState(1);
  const [totalPg, newCardsOnPg] = paginate(cardsToDisplay, currentPg); // NOTE: This is destructuring

  const previousPg = () => {
    if (currentPg > 1) {
      setCurrentPg(currentPg - 1);
    }
  }

  const nextPg = () => {
    if (currentPg < totalPg) {
      setCurrentPg(currentPg + 1);
    }
  }

  return (
    <div className='bg-[#0F232E] border-3 border-[#007C90] relative flex items-center flex-col flex-1'>
      <div className='flex items-center'>
        <RxTriangleLeft size={50} onClick={() => previousPg()} />
        <p className='text-3xl'>{`${currentPg}/${totalPg}`}</p>
        <RxTriangleRight size={50} onClick={() => nextPg()} />
      </div>
      <div className='grid grid-cols-4 p-2 gap-x-3 gap-y-5 auto-rows-max'>
        {/* {cardsToDisplay} */}
        {Array.from({ length: newCardsOnPg.length }, (_, i) =>
          <p key={i}>{newCardsOnPg[i]}</p>
        )}
      </div>
    </div>
  )
}

export default CardListSection