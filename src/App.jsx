import React from 'react'
import { useEffect } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import DeckBuilderPage from './pages/DeckBuilderPage'
import LobbyPage from './pages/LobbyPage'
import DuelFieldPage from './pages/DuelFieldPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Will use as index for now */}
      {/* <Route index element={<LobbyPage/>} /> */}
      {/* <Route index element={<DeckBuilderPage/>} /> */}
      
      <Route path='/'>
        {/* Encasing pages in a parent layout file allows it to be applied to pages you want */}
  
        <Route index element={ <LobbyPage /> } />
        {/* <Route index element={<DeckBuilderPage/>} /> */} {/* TEST USE: To make working on a pg easier 
        */}
        <Route path='/deck-builder' element={ <DeckBuilderPage /> } />
        <Route path='/duel-field' element={ <DuelFieldPage /> } />
  
        {/* Asterisk sign is a "catch all"; so same error page pops whenever there's error */}
        {/* <Route path='*' element={ <NotFoundPage /> } /> */}
      </Route>
    </>
  )
)

const App = () => {
  useEffect(() => {
    const scalePage = () => {
      const scaleFactor = Math.min(window.innerWidth / 1400, window.innerHeight / 800);  // Take lowest size, so no content gets cut off
      document.body.style.transform = `scale(${scaleFactor})`;
      document.body.style.transformOrigin = 'left center';
      document.body.style.width = `${100 / scaleFactor}%`; // Prevent horizontal scroll
    };

    scalePage();
    window.addEventListener('resize', scalePage);

    // Cleanup function (runs when component unmounts)
    return () => window.removeEventListener('resize', scalePage);
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App
