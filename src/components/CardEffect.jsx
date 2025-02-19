const CardEffect = ({ text }) => {
  const textLineBroken = text.split('\n');
  
  return (
    <div className='overflow-y-auto bg-black border border-white p-2 h-full'>
      {/* <p>{ text }</p> */}

      {Array.from({ length: textLineBroken.length }, (_, i) =>
        <p key={i}>{ textLineBroken[i] }</p>
      )}
    </div>
  )
}

export default CardEffect