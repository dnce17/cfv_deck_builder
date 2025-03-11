import { useState, useEffect } from 'react'
import { RxTriangleLeft, RxTriangleRight } from 'react-icons/rx'

import { paginate } from '../../helpers';

const CardListSection = ({ cardsToDisplay, setResetPagination, resetPagination }) => {
  const [currentPg, setCurrentPg] = useState(1);
  const [totalPg, newCardsOnPg] = paginate(cardsToDisplay, currentPg); // CAUTION: This is destructuring, not using useState

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

  // Reset to page 1 whenever cardsToDisplay updates
  useEffect(() => {
    if (resetPagination) {
      setCurrentPg(1);
      setResetPagination(false)
    }
  }, [cardsToDisplay]);

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
          <div key={i}>{newCardsOnPg[i]}</div>
        )}
      </div>
    </div>
  )
}

export default CardListSection