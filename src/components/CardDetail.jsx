const CardDetail = ({ header, info, textSize='text-base' }) => {
  return (
    <div className='flex items-center bg-black border border-white p-1 text-center m-1'>
      <p className='text-yellow-200 text-sm'>{header}</p>
      <p className={`font-bold text-white ml-2 ${textSize}`}>{info}</p>
    </div>
  )
}

export default CardDetail