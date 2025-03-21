const PhaseBtn = ({ text, phase, changePhase }) => {

  const buttonStyles = 'cursor-pointer mx-2 border-2 bg-linear-to-t w-[45px] h-[30px] rounded-md';
  const phaseDefaultColors = buttonStyles + ' border-[#008494] from-[#037383] to-[#083540]';
  const phaseIndicatorColors = buttonStyles + ' border-[#D09601] from-[#D57400] to-[#DFA200] text-white';

  return (
    <button
      onClick={() => changePhase(text)}
      className={phase == text ? phaseIndicatorColors : phaseDefaultColors}
    >
      <p className={`mx-auto text-white font-xs`}>{text}</p>
    </button>
  )
}

export default PhaseBtn