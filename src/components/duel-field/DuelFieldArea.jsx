import PlayerBField from './PlayerBField'
import PlayerAField from './PlayerAField'

const DuelFieldArea = () => {
  return (
    <section className='field-area text-center bg-sky-600'>
      <div className='ml-1 w-full h-full flex flex-col items-center'>
        <PlayerBField />

        {/* Shared Guard Zone */}
        <section className='h-[10%] bg-green-500'>
          <div className='guard-zone bg-gray-400 rounded-lg'>Guard</div>
        </section>

        <PlayerAField />
      </div>
    </section>
  )
}

export default DuelFieldArea