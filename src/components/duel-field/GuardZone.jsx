const GuardZone = ({ children }) => {
  return (
    <section className='flex justify-center items-center w-full h-[65px] bg-pink-400'>
      {/* <div className='guard-zone rounded-lg'>Guard</div> */}
      <div className='absolute flex'>
        {children}
      </div>
    </section>
  )
}

export default GuardZone