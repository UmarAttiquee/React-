import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import Home from './components/Home/Home.jsx';
import About from './components/Home/About.jsx';
import Contect from './components/Home/Contect.jsx';
import UserName from './components/Home/UserName.jsx';
import Github from './components/Home/Github.jsx';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />, // App is the layout
//     children: [
//       {
//         path: '/home', // renders at "/"
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//        {
//         path: '/contect',
//         element: <Contect />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
        <Route path='' element={<Home/>}></Route>
         <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contect' element={<Contect/>}></Route>
         <Route path='/userName/:id' element={<UserName/>}></Route>
 <Route path='/github' element={<Github/>}></Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
