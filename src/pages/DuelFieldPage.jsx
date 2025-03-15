import CardImgArea from '../components/layout-areas/CardImgArea'
import CardInfoArea from '../components/layout-areas/CardInfoArea'
import './DuelFieldPage.css'

const DuelFieldPage = () => {
  const hoveredCard = {
    "id": 1,
    "name": "Chakrabarthi Divine Dragon, Nirvana",
    "imgPath": "./src/assets/card-imgs/1_chakrabarthi_divine_dragon_nirvana.jpg",
    "grade": 3,
    "skill": "Twin Drive",
    "icon": "Persona Ride",
    "power": "13000",
    "critical": "1",
    "shield": 0,
    "nation": "Dragon Empire",
    "clan": "",
    "race": "Flame Dragon",
    "cardType": "Normal Unit",
    "triggerType": "",
    "triggerEffect": "",
    "rideline": "",
    "format": "Standard / Premium",
    "text": "[ACT](VC)1/Turn:COST [Discard a card from your hand], choose a grade 0 card from your drop, and call it to (RC). <br/>[AUTO](VC):When this unit attacks, COST [Counter Blast (1)], and this unit and all of your units with the [overDress] ability get [Power]+10000 until end of turn.\n",
    "maxCopies": 4
  }
  return (
    <div className='bg-sky-100 h-screen flex'>
      <div className='duel-field-grid-layout text-white'>
        <CardImgArea hoveredCard={hoveredCard} />
        <CardInfoArea hoveredCard={hoveredCard} />
        {/* <section className='duelField-area text-center perspective-[100px] scale-y-80'> */}
        <section className='duelField-area text-center'>
          {/* <div className='ml-1 w-full h-full rotate-x-2'> */}
          <div className='ml-1 w-full h-full flex flex-col'>
            {/* Player B field */}
            <div className='hand-zone-b w-[300px] h-[96.25px] bg-gray-400 rounded-lg absolute '>
              Insert Hand Cards Here
            </div>
            <section className='player-b-side h-[45%] flex justify-evenly bg-pink-500'>
              <div className='flex flex-col items-center justify-evenly h-full'>
                <div className='dmg-zone-b w-[96.25px] h-[160px] bg-gray-400 rounded-lg'>Dmg</div>
                <div className='order-zone-b w-[130px] h-[96.25px] bg-gray-400 rounded-lg'>Order</div>
              </div>

              <div className='flex items-end mb-5 relative bg-green-500'>
                <div className='field-zone-b h-fit grid grid-rows-2 grid-cols-3 gap-6'>
                  <div className='back-rc-1-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl'>RC Back 1</div>
                  <div className='back-rc-2-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl'>RC Back 2</div>
                  <div className='back-rc-3-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl'>RC Back 3</div>
                  <div className='front-rc-1-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl'>RC Front 1</div>
                  <div className='vg-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl'>VC</div>
                  <div className='front-rc-2-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl'>RC Front 2</div>
                </div>
              </div>

              <div className='grid grid-rows-3 grid-cols-3'>
                <div className='drop-zone-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl'>Drop</div>
                <div className='drop-zone-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl col-span-2'>Bind</div>
                <div className='drop-zone-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl'>Deck</div>
                <div className='drop-zone-b w-[60px] h-[86.25px] bg-gray-400 rounded-xl col-span-2'>Ride</div>
                <div className='drop-zone-b w-[86.25px] h-[60px] bg-gray-400 rounded-xl'>Trigger</div>
                <div className='drop-zone-b h-[86.25px] bg-gray-400 rounded-xl col-span-2 ml-4'>G Zone</div>
              </div>

            </section>

            {/* Shared Guard Zone */}
            <section className='h-[10%] bg-green-500'>
              <div className='guard-zone bg-gray-400 rounded-lg'>Guard</div>
            </section>

            {/* Player A field */}
            <section className='player-a-side flex-1 bg-sky-500'>
              <div className='flex flex-col justify-evenly h-full'>
                <div className='order-zone-a w-[130px] h-[96.25px] bg-gray-400 rounded-lg'>Order</div>
                <div className='dmg-zone-a w-[96.25px] h-[160px] bg-gray-400 rounded-lg'>Dmg</div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DuelFieldPage