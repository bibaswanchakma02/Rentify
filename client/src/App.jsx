import Home from './screens/home/Home'
import {
  createBrowserRouter, 
  RouterProvider,
  
} from 'react-router-dom'
import ListPage from './screens/listPage/listPage';
import Layout from './screens/layout/layout';
import DetailsPage from './screens/detailsPage/detailsPage';
import ProfilePage from './screens/profilePage/profilePage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/list',
          element: <ListPage/>
        },
        {
          path: '/:id',
          element: <DetailsPage/>
        },
        {
          path: '/profile',
          element: <ProfilePage/>
        }
      ]
    }
  
  ]);

  return (
 
    <RouterProvider router={router}/>
  )
}

export default App