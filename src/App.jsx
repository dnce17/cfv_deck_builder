import React from 'react'
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
      <Route index element={<DeckBuilderPage/>} />
    </>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
