import { RxTriangleLeft, RxTriangleRight } from 'react-icons/rx'

const CardListSection = ({ cardsToDisplay }) => {
  return (
    <div className='bg-[#0F232E] border-3 border-[#007C90] relative flex items-center flex-col flex-1'>
      <div className='flex items-center'>
        <RxTriangleLeft size={50} />
        <p className='text-3xl'>1/10</p>
        <RxTriangleRight size={50} />
      </div>
      <div className='grid grid-cols-4 p-2 gap-x-3 gap-y-5 auto-rows-max'>
        {cardsToDisplay}
      </div>
    </div>
  )
}

export default CardListSection