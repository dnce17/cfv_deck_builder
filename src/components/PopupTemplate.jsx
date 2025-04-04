const PopupTemplate = ({ children, onClose, width = 'w-[700px]', height = 'h-[350px]' }) => {
  return (
    <div className={`flex flex-col bg-[#02264F] border-3 border-white absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ${width} ${height} rounded-2xl z-10`}>
      <div className='flex justify-end items-center bg-linear-to-t from-[#173B7E] to-[#10214B] w-full h-[50px] rounded-t-2xl'>
        <button
          className='text-white text-3xl font-bold mr-2 w-[35px] h-[35px] bg-[#B3084F]'
          onClick={onClose}
        >
          <p className='max-w-[90%] mx-auto'>X</p>
        </button>
      </div>
      {children}
    </div>
  )
}

export default PopupTemplate