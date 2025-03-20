import Card from '../assets/card-imgs/6_vairina.jpg'

const PlaceholderCard = ({ testCardPath=Card, size='w-[60px] h-[87px]', classes='', style={}}) => {
  return (
    // <div className='bg-slate-300 w-[80px] h-[115px] rounded-xl'></div>
    // <div className={`bg-slate-300 w-[60px] h-[86.25px] rounded-xl ${classes}`}></div>
    <img src={testCardPath} className={`${size} ${classes}`} style={style} alt='placeholder card' />
  )
}

export default PlaceholderCard