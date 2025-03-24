## DeckBuilderPage.jsx
`if (filterVals)` with `filterVal` having a falsy default value ensures nothing is filtered during the initial render of `useEffect()`, preventing the card list from showing entire card database (db). This is why `filterVal` is set to `''` rather than an empty object; `''` is considered `false` while an empty object (and array) is considered `true`.
```js
// SOLUTION
if (filterVals) {
  setFilteredCardList(CardDb.cards.filter(filterTest));
}
```

### A Prior Failed Solution to Above
Before I found the solution above, I tried to prevent the initial render by returning `useEffect()` early with `useRef` (code below) before it reached the filter function. 
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

### Page Scaler
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

What solved it was the styles below, namely the h-screen and flex stuff
```html
<div className='h-screen flex justify-center items-center'>
```