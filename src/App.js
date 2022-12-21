import './style.css';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import LeftbarSection from './components/leftbarSection/LeftbarSection';
import RightbarSection from './components/rightbarSection/RightbarSection';
import Navbar from './components/navbar/Navbar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import ForgotPassword from './pages/forgotPassword/ForgetPassword';
import ResetPassword from './pages/resetPassword/ResetPassword';
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate';
import AuthContext from './context/AuthContext';

function App() {
  // const [data, setData] = useState();
  // useEffect( () => {
  //   const fetchData = async () => {
  //     const res = await fetch('/api/users?username=Danish Ahamad', {
  //       method : "GET",
  //       headers : {
  //         "Content-Type" : 'application/json',
  //         Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg3ODI5ODhmMDM0NzcwNGRiN2NjOGQiLCJpYXQiOjE2NzE0MzE0NTZ9.c1dp7shAC0dvK3L0Bzxxbpj5wEfIFwx-PULE9TRI5Xc"
  //       }
  //     });
  //     const result = await res.json();
  //     setData(result);
  //   }
  //   fetchData();
  // }, []);
  // console.log(data);

  const { isLogedIn } = useContext(AuthContext)

  const Layout = () => {
    const { theme } = useContext(ThemeContext);

    const user = { username : "Adil Ahamad", profilePicture : "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0" }

    return (
      <div className={`theme-${theme ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{display : "flex"}}>
          <LeftbarSection user={user} className="leftSection"/>
          <Outlet className="mainSection"/>
          <RightbarSection className="rightSection" />
        </div>
      </div>
    );
  }

  // const ProtectedRoute = ({children}) => {
  //   if (!isLogedIn) {
  //     return <Navigate to="/login" />
  //   }

  //   return children;
  // }

  const router = createBrowserRouter([
    {
      path : '/',
      element : isLogedIn ? <Layout /> : <Login />,
      children : [
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/profile/:id',
          element : <Profile />
        },
        {
          path : '/profile/update',
          element : <ProfileUpdate />
        }
      ]
    },
    {
      path : '/login',
      element : <Login />
    },
    {
      path : '/register',
      element : <Register />
    },
    {
      path : '/forgot',
      element : <ForgotPassword />
    },
    {
      path : '/reset/:id',
      element : <ResetPassword />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
