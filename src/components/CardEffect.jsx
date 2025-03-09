const CardEffect = ({ text }) => {
  const textLineBroken = text.split('<br/>');

  return (
    <div className='overflow-y-auto bg-black border border-white p-2 h-full'>
      {Array.from({ length: textLineBroken.length }, (_, i) =>
        <p key={i}>{textLineBroken[i]}</p>
      )}
    </div>
  )
}

export default CardEffect