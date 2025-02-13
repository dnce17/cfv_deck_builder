const filterDropdownOptions = {
  triggers: ['', 'Critical', 'Heal', 'Draw', 'Front', 'Over'],
  nations: [
    '',
    'Dragon Empire',
    'Dark States',
    'Brandt Gate',
    'Keter Sanctuary',
    'Stoicheia',
    'Lyrical Monasterio',
  ],
  cardTypes: [
    '',
    'All Units',
    'All Orders',
    'Normal Unit',
    'Trigger Unit',
    'Normal Order',
    'Blitz Order',
    'Set Order',
    'Trigger Order',
    'Crest'
  ]
}

const checkHandler = (isChecked, setIsChecked) => {
  setIsChecked(!isChecked)
}

export { filterDropdownOptions, checkHandler };