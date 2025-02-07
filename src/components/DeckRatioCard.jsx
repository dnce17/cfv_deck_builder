const DeckRatioCard = ({ header, info }) => {
  return (
    <div className='text-center font-bold px-1'>
      <p>{info}</p>
      {/* <h2 className={`${header != 'Normal Units' ? 'text-sm' : 'text-[11px]'}`}>{header}</h2> */}
      <h2 className='text-sm'>{header}</h2>
    </div>
  )
}

export default DeckRatioCard