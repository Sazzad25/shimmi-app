import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home/Home';
import Profile from './components/Profile';
import Topic from './components/Topic';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },

        {
          path: '/about',
          element: <About></About>
        },

        {
          path: '/profile',
          element: <Profile></Profile>
        },

        {
          path: '/topics/:id',
          element: <Topic></Topic>,
          loader: ({params}) => fetch(`https://learning-server-amber.vercel.app/news/${params.id}`),
        },
      ]
    }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
