import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import Layout from './Layout.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './components/Home.jsx';
import AllVisa from './components/AllVisa.jsx';
import AddVisa from './components/AddVisa.jsx';
import MyAddVisa from './components/MyAddVisa.jsx';
import MyVisaApplications from './components/MyVisaApplications.jsx';
import SignIn from './Register/SignIn.jsx';
import SignUp from './Register/SignUp.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import UpdateVisa from './components/UpdateVisa.jsx';
import VisaDetails from './components/VisaDetails.jsx';
import ProviderRoute from './Provider/ProviderRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/allvisa",
        element:<AllVisa></AllVisa>,
        loader: () => fetch('https://visa-navigator-server-beta-seven.vercel.app/addvisa')
      },
      {
        path:"/addvisa",
        element:<ProviderRoute><AddVisa></AddVisa></ProviderRoute>,
      },
      {
        path:"/myaddedvisa",
        element:<ProviderRoute><MyAddVisa></MyAddVisa></ProviderRoute>,
        loader: () => fetch('https://visa-navigator-server-beta-seven.vercel.app/addvisa')
        
      },
      {
        path: "updatevisa/:id",
        element: <UpdateVisa></UpdateVisa>,
      },
      {
        path:"/myvisaapplication",
        element:<ProviderRoute><MyVisaApplications></MyVisaApplications></ProviderRoute>,
      },
      {
        path:"/Signin",
        element:<SignIn></SignIn>,
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>,
      },
      {
        path:"/visadetails",
        element:<VisaDetails></VisaDetails>,
      },
      
     
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
