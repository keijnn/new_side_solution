//import modules
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//import pages
import { Home } from './home'
import { Paragraph } from './paragraph'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'paragraph/:sentence',
    element: <Paragraph />,
  },
  {
    path: '*',
    element: <Home />,
  },
])

export const Routing = () => <RouterProvider router={router} />
