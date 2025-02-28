import Btn from './Btn'

const PopupTemplate = ({ children, setVisibleStatus, width='w-[700px]', height='h-[350px]' }) => {
  return (
    <div className={`flex flex-col bg-[#02264F] border-3 border-white absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ${width} ${height} rounded-2xl z-10`}>
      <div className='flex justify-end items-center bg-linear-to-t from-[#173B7E] to-[#10214B] w-full h-[50px] rounded-t-2xl'>
        <Btn
          text='X'
          textColor='text-white'
          textSize='text-3xl'
          textWeight='font-bold'
          customizeBtn={true}
          customBtnClass='mr-2 w-[35px] h-[35px] bg-[#B3084F]'
          clickFunc={() => setVisibleStatus(false)}
        />
      </div>
      {children}
    </div>
  )
}

export default PopupTemplate