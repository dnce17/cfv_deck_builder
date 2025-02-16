import CardDb from '../test/test-card-db.json'

const TestUse = () => {
  const filterVals = {
    'name': 'ladder',
    'cardType': 'All Orders'
  }

  const checkTextInputMatch = (card, property) => {
    // NOTE: .includes() already returns true/false
    return card[property].toLowerCase().includes(filterVals[property].trim().toLowerCase());
  }

  const checkSpecialCases = (card, property) => {
    // Specifically "All Units" + "All Orders"
    let specialCases = [
      // FORMAT: Filter Val, Substring to detect in filter val
      ['All Units', 'Unit'],
      ['All Orders', 'Order']
    ];

    for (let casePair of specialCases) {
      if (filterVals[property] == casePair[0]) {
        return card[property].includes(casePair[1]);
      }
    }
  }

  const filterTest = (card) => {
    for (let property in filterVals) {
      switch (property) {
        case 'name':
        case 'text':
        case 'race':
          // If even one property does not match, this card will not match at all
          if (checkTextInputMatch(card, property) == false) {
            return false;
          }
          break;
        // ISSUE FOUND: This is only for "All Units" and "All Orders";
        // If (e.g.) "Normal Unit" is selected, it should be checked with the default
        // You need something to check is property is cardType and the value is either "All Units" or "All Orders"
        case 'cardType':
          if (checkSpecialCases(card, property) == false) {
            return false;
          }
          break;
        default:
          if (filterVals[property] != card[property]) {
            return false;
          }
          break;
      }
    }
    return true; // If all checks pass, keep the card
  }

  let filteredCardList = CardDb.cards.filter(filterTest);
  console.log(filteredCardList);

  return null;
}

export default TestUse