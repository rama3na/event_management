import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/usersapp/Login';
import RootLayout from './RootLayout';
import AboutUs from './components/usersapp/AboutUs';
import Home from './components/usersapp/Home';
import  Userprofile from './components/user-profile/Userprofile'
import EntryPage from './components/usersapp/EntryPage';
import Adregister from './components/admin/Adregister';
import AddEvent from './components/admin/AddEvent';
import ViewEvent from './components/admin/ViewEvent';
import AdProfile from './components/admin/AdProfile';
import AdminLogin from './components/admin/AdminLogin';
import LoginPage from './components/usersapp/LoginPage';
import Page1 from './components/usersapp/Page1';
import Register from './components/usersapp/Register';
import Home1 from './components/usersapp/Home1';
function App() {
  const router=createBrowserRouter([
      {
        path:'/',
        element:<RootLayout/>,
        children:[
          {
            path:'/',
            element:<Home1/>
          },
          {
            path:"/Home",
            element:<Home/>
          },
         
          {
            path:"/AboutUs",
            element:<AboutUs/>
          },
          {
            path:"/AddEvent",
            element:<AddEvent/>
          },
          {
            path:"/ViewEvent",
            element:<ViewEvent/>
          },
         
          {
            path:"/EntryPage",
            element:<EntryPage/>
             
          },
          {
            path:"/Page1",
            element:<Page1/>,
            children:[
              {
                path:"AdminRegister",
                element:<Adregister/>
              },
              {
                path:"Register",
                element:<Register/>
              }
            ]
             
          },
          {
            path:"/LoginPage",
            element:<LoginPage/>,
            children:[
              {
                path:"AdminLogin",
                element:<AdminLogin/>,
              },
              {
                path:"Login",
                element:<Login/>
              }
            ]
             
          },{
            path:"/AdProfile",
            element:<AdProfile/>
          },
          { 
            path:"/UserProfile",
            element:<Userprofile/>
          }
          
           
        ]
      }
       
  ])
  return (
    <div >
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
