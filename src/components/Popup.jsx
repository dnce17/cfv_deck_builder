import Btn from "./Btn"

const Popup = ({ children }) => {
  return (
    <div className='bg-[#02264F] border-3 border-white absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-2xl z-10'>
      <div className='flex justify-end items-center bg-linear-to-t from-[#173B7E] to-[#10214B] w-full h-[70px] rounded-t-2xl'>
        <Btn
          text='X'
          textColor='text-white'
          textSize='text-3xl'
          textWeight='font-bold'
          customizeBtn={true}
          customBtnClass='mr-2 w-[50px] h-[50px] bg-[#B3084F]'
        />
      </div>
      {children}
    </div>
  )
}

export default Popup