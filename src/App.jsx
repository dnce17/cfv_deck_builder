import React, { useEffect } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import DeckBuilderPage from './pages/DeckBuilderPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Will use as index for now */}
      <Route index element={<DeckBuilderPage />} />
    </>
  )
)

const App = () => {
  useEffect(() => {
    const scalePage = () => {
      // console.log(window.innerWidth);
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
