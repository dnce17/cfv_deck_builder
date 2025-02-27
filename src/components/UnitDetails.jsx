import CardDetail from './CardDetail'

const UnitDetails = ({ hoveredCard }) => {
  return (
    <div className='grid grid-rows-3 grid-cols-6'>
      <CardDetail className='col-span-2' header='Grade' info={hoveredCard.grade} />
      <CardDetail className='col-span-2' header='Power' info={hoveredCard.power} />
      <CardDetail className='col-span-2' header='Shield' info={hoveredCard.shield} />
      <CardDetail className='col-span-3' header='Skill' info={hoveredCard.skill} textSize='text-xs' />
      {hoveredCard.triggerType
        ? <CardDetail className='col-span-3' header='Trigger' info={hoveredCard.triggerType} textSize='text-xs' />
        : <CardDetail className='col-span-3' header='Icon' info={hoveredCard.icon ? hoveredCard.icon : 'None'} textSize='text-xs' />
      }
      <CardDetail className='col-span-3' header='Nation' info={hoveredCard.nation} textSize='text-xs' />
      <CardDetail className='col-span-3' header='Race' info={hoveredCard.race} textSize='text-xs' />
    </div>
  )
}

export default UnitDetails