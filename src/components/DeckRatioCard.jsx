const DeckRatioCard = ({ header, info }) => {
  return (
    <div className='text-center font-bold px-1'>
      <p>{info}</p>
      <h2 className={`${header != 'Normal Units' ? 'text-xs' : 'text-[0.625rem]'}`}>{header}</h2>
    </div>
  )
}

export default DeckRatioCard