import CardDetail from './CardDetail'

const UnitDetails = ({ hoveredCard }) => {
  return (
    <div className='grid grid-rows-3'>
      <div className='grid grid-cols-3'>
        <CardDetail header='Grade' info={hoveredCard.grade} />
        <CardDetail header='Power' info={hoveredCard.power} />
        <CardDetail header='Shield' info={hoveredCard.shield} />
      </div>

      <div className='grid grid-cols-5'>
        <CardDetail className='col-span-2' header='Skill' info={hoveredCard.skill} textSize='text-xs' />
        {hoveredCard.triggerType
          ? <CardDetail className='col-span-2' header='Trigger' info={hoveredCard.triggerType} textSize='text-xs' />
          : <CardDetail className='col-span-2' header='Icon' info={hoveredCard.icon ? hoveredCard.icon : 'None'} textSize='text-xs' />
        }
        <CardDetail header='Critical' info={hoveredCard.critical} textSize='text-xs' />
      </div>

      <div className='grid grid-cols-2'>
        <CardDetail header='Nation' info={hoveredCard.nation} textSize='text-xs' />
        <CardDetail header='Race' info={hoveredCard.race} textSize='text-xs' />
      </div>
    </div>
  )
}

export default UnitDetails