import React from 'react'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './Landing';
import Header from '../components/Header';


const Container = () => {
   const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Landing/>
    },
  
   ]

   )
  return (<>
  <Header/>
<RouterProvider router={appRouter}/>
  </>
    
  )
}

export default Container;