## CSS CAUTION
* Even though I created specific css file for different pages, the css still applies universally since I did not use module.css. I use distinct naming of variables like `duel-field-grid-layout` and `deck-builder-grid-layout`.

## DeckBuilderPage.jsx
* `if (filterVals)` with `filterVal` having a falsy default value ensures nothing is filtered during the initial render of `useEffect()`, preventing the card list from showing entire card database (db). This is why `filterVal` is set to `''` rather than an empty object; `''` is considered `false` while an empty object (and array) is considered `true`.
```js
// SOLUTION
if (filterVals) {
  setFilteredCardList(CardDb.cards.filter(filterTest));
}
```
* **A Prior Failed Solution to Above**: Before I found the solution above, I tried to prevent the initial render by returning `useEffect()` early with `useRef` (code below) before it reached the filter function. 
```js
const isFirstRender = useRef(true);
useEffect(() => {
  console.log(isFirstRender.current);
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
}, [filterVals])
```
However, that did not work. I am not too sure of the exact reason. From my understanding based on research, useEffect does a subsequent render after the initial render is prevented. `console.log(isFirstRender.current);` displays true from the stopped initial render and and then false subsequently, meaning `setFilteredCardList(CardDb.cards.filter(filterTest));` activated, causing the entire db to load anyway (even though I wanted to prevent that).

* left center was not displaying correctly on DeckBuilderPage.jsx. Rather than actually centering in the middle of the page, it goes to the bottom and causes a scrollbar to appear
```js
useEffect(() => {
  const scalePage = () => {
    const scaleFactor = Math.min(window.innerWidth / 1400, window.innerHeight / 800);
    document.body.style.transform = `scale(${scaleFactor})`;
    document.body.style.transformOrigin = 'left center';
    document.body.style.width = `${100 / scaleFactor}%`; // Prevent horizontal scroll
  };

  scalePage();
  window.addEventListener('resize', scalePage);

  // Cleanup function (runs when component unmounts)
  return () => window.removeEventListener('resize', scalePage);
}, []);
```

What solved it was the styles below on the very top main container, namely the h-screen and flex stuff
```html
<div className='h-screen flex justify-center items-center'>
```

## CardImgArea + CardInfoArea
* They have default `gridArea=''` in their parameter b/c these two need to be reused in the duel field and using the same grid area name like `cardImg` in both the deck builder and duel field page will cause issues. Thus, I will opt for `deckBuilderCardImg` and `gameCardImg`. A blank default also offers flexibility if I don't need to use grid for whatever reason. 

## PlayerAField
* col-span-2 in 1st Zone tag removes the default horizontal gap that occurs between grid items, giving you more control over them with `gap`
```js
<div className='grid grid-rows-3 grid-cols-2 w-fit gap-y-2 gap-x-4 ml-10 bg-black'>
  <Zone zoneName='trigger-zone-b' size='w-[86.25px] h-[60px]' classes='self-end col-span-2' placeholderText='Trigger' />
  <Zone zoneName='deck-zone-b' placeholderText='Deck' />
  <Zone zoneName='ride-zone-b' placeholderText='Ride' />
  <Zone zoneName='drop-zone-b' placeholderText='Drop' />
  <Zone zoneName='bind-zone-b' placeholderText='Bind' />
</div>
```

## Regarding classNames if dynamic values are required
* This does not work b/c Tailwind does NOT parse dynamic values inside template literals (${}) at runtime
```js
className={`top-[${-10 + (i * 18)}px])`}
```
* SOLUTION: Use inline styles b/c it will always work, even if values are dynamic
```js
style={{ top: `${-10 + (i * 18)}px` }} 
```


## FUTURE USE
```js
const [playerZones, setPlayerZones] = useState({
  rideDeck: TEST_DECK,
  dropZone: TEST_DROP,
  bindZone: TEST_DROP
});

// Function to update one or more zones dynamically
const updateZones = (updates) => {
  setPlayerZones(prevZones => ({
    ...prevZones,      // Keep existing zones
    ...updates         // Overwrite with new values
  }));
};

// Example usage:
updateZones({
  rideDeck: [...playerZones.rideDeck, newCard], // Add a new card to ride deck
  dropZone: playerZones.dropZone.slice(1)      // Remove the first card from drop zone
});
```

### Useful
https://codepen.io/pigparlor/pen/MWqPGVR --> adjust card spacing as more/less cards get added/removed