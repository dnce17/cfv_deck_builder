import PopupTemplate from '../popups/PopupTemplate'
import PlaceholderCard from '../PlaceholderCard'

const ViewCardsPopUp = ({ header, setVisibleStatus }) => {
  return (
    <PopupTemplate
      setVisibleStatus={setVisibleStatus}
      height='max-h-[380px]'
      children={
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
  )
}

export default ViewCardsPopUp