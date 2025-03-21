import { useState } from 'react'
import PhaseBtn from './PhaseBtn';

const PhaseBtns = () => {
  const [phase, setPhase] = useState('Draw');

  const changePhase = (phase) => {
    setPhase(phase);
  }

  return (
    <div className='absolute right-0 z-10 flex flex-col justify-evenly h-[30%]'>
      <PhaseBtn text='Draw' phase={phase} changePhase={changePhase}/>
      <PhaseBtn text='Ride' phase={phase} changePhase={changePhase}/>
      <PhaseBtn text='Main' phase={phase} changePhase={changePhase}/>
      <PhaseBtn text='Battle' phase={phase} changePhase={changePhase}/>
      <PhaseBtn text='End' phase={phase} changePhase={changePhase}/>
    </div>
  )
}

export default PhaseBtns