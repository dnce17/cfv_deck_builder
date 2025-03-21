const GuardZone = ({ children }) => {
  return (
    <section className='flex justify-center items-center w-full h-[65px]'>
      {/* <div className='guard-zone rounded-lg'>Guard</div> */}
      {/* <div className='absolute w-full h-full flex'>
        {children}
      </div> */}
      {children}
    </section>
  )
}

export default GuardZone