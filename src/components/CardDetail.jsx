const CardDetail = ({ header, info, className='', textSize='text-base' }) => {
  return (
    <div className={`flex justify-center items-center bg-black border border-white p-1 m-1 ${className}`}>
      <p className='text-yellow-200 text-sm'>{header}</p>
      <p className={`font-bold text-white ml-2 ${textSize}`}>{info}</p>
    </div>
  )
}

export default CardDetail