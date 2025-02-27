import PopupTemplate from './PopupTemplate'
import InvalidDeckText from './InvalidDeckText'
import Btn from './Btn'

const InvalidDeckPopup = () => {
  return (
    <PopupTemplate
      children={
        <div className='flex flex-col items-center justify-evenly flex-1'>
          <p className='text-white text-2xl'>Deck is incomplete. Save anyway?</p>
          <div className='mx-3 p-1 bg-[#093A73] w-[90%] h-[180px] overflow-y-auto'>
            <InvalidDeckText errMsg='Main deck must contain 50 cards' />
            <InvalidDeckText errMsg='Ride deck must contain 4 cards' />
            <InvalidDeckText errMsg='Exactly 16 trigger units must be in deck' />
            <InvalidDeckText errMsg='Only a max of 8 [triggerName] triggers is allowed in deck' />

          </div>
          <div>
            <Btn
              text='No'
              textColor='text-[#CE5D5D]'
              textSize='text-xl'
              textWeight='font-bold'
              borderColor='border-[#A32B00]'
              dropShadow='drop-shadow-[0px_0px_4px_#A32B00]'
              fromGradient='from-[#662113]'
              toGradient='to-[#3C1812]'
            />
            <Btn
              text='Yes'
              textColor='text-[#23AD5C]'
              textSize='text-xl'
              textWeight='font-bold'
              borderColor='border-[#2A824B]'
              dropShadow='drop-shadow-[0px_0px_4px_#10361A]'
              fromGradient='from-[#0F8631]'
              toGradient='to-[#10361A]'
            />
          </div>
        </div>
      }
    />
  )
}

export default InvalidDeckPopup