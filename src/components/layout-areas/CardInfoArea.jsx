import CardDetail from '../CardDetail'
import CardEffect from '../CardEffect'

const CardInfoArea = () => {
  const fillerCardEffect = "[AUTO]:[Counter Blast (2)] When this unit is placed on (VC), you may pay the cost. If you do, choose one of your opponent's rear-guards, and retire it. [AUTO]:[Counter Blast (2)] When this unit is placed on (RC), if you have a «Royal Paladin» vanguard, you may pay the cost. If you do, choose one of your opponent's grade 2 or greater rear-guards, and retire it.";
  
  return (
    <section className='cardInfo-area bg-[#0F232E] flex flex-col border-3 border-[#007C90]'>
      <h1 className='text-center font-bold py-0.5'>Blaster Blade</h1>
      <div className='flex flex-wrap justify-center'>
        <CardDetail header='Grade' info='10' />
        <CardDetail header='Power' info='13000' />
        <CardDetail header='Shield' info='15000' />
        <CardDetail header='Skill' info='Triple Drive' textSize='text-xs' />
        <CardDetail header='Icon' info='Persona Ride' textSize='text-xs' />
        <CardDetail header='Nation' info='Lyrical Monasterio' textSize='text-xs' />
        <CardDetail header='Race' info='Zodiac Time Beast' textSize='text-xs' />
      </div>
      <CardEffect
        text={fillerCardEffect}
      />
    </section>
  )
}

export default CardInfoArea