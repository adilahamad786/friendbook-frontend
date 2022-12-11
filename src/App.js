import './style.css';
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import LeftbarSection from './components/leftbarSection/LeftbarSection';
import RightbarSection from './components/rightbarSection/RightbarSection';
import Navbar from './components/navbar/Navbar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import ForgotPassword from './pages/forgotPassword/ForgetPassword';
import ResetPassword from './pages/resetPassword/ResetPassword';

function App() {

  const current_user = true;

  const Layout = () => {
    const { theme } = useContext(ThemeContext);

    const user = { username : "Adil Ahamad", profilePicture : "https://th.bing.com/th/id/R.d15b456aba80c4a523cf1f6d31dce7e8?rik=2ZT%2baXLkZYcxWg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-wallpaper-27.jpg&ehk=jIVFSOxLN%2fQKs4hEfZHNWAeXoeXkeEXooP%2fTy9Vwkek%3d&risl=&pid=ImgRaw&r=0" }

    return (
      <div className={`theme-${theme ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{display : "flex"}}>
          <LeftbarSection user={user} className="leftSection" />
          <Outlet />
          <RightbarSection className="leftSection" />
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({children}) => {
    if (!current_user) {
      return <Navigate to="/login" />
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path : '/',
      element : <ProtectedRoute><Layout /></ProtectedRoute>,
      children : [
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/profile/:id',
          element : <Profile />
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
