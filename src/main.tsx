import ReactDOM from 'react-dom/client'
import { BrowserRouterProps, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "../routes/App/App"
import './index.css'
import Button1 from "../routes/Button1"
import Button2 from "../routes/Button2"
import Button3 from "../routes/Button3"
import Details from "../routes/Details"
import React from 'react'
import {loader as AppLoader} from "../routes/App/App"


const routerConfig = [
  {
    path:"/",
    element: <App/>,
    loader: AppLoader,
    children:[
      {
        path: "episode1",
        element: <Button1/>,
        loader: AppLoader,

        children: [
          {
            path: "details",
            element: <Details/>,
          }
        ]
      }, 
      {
        path: "episode2",
        element: <Button2/>,
        loader: AppLoader,

        children: [
          {
            path: "details",
            element: <Details/>,
          }
        ]
      },
      {
        path: "episode3",
        element: <Button3/>,
        loader: AppLoader,

        children: [
          {
            path: "details",
            element: <Details/>,
          }
        ]
      }
    ]
  }
]

const browserRouterProps: BrowserRouterProps = { basename: '/' }

const router = createBrowserRouter(routerConfig, browserRouterProps)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)