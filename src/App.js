import './style.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate';
import AuthContext from './context/AuthContext';
import { useSelector } from 'react-redux';

function App() {
  const { isLogedIn } = useContext(AuthContext);
  const user = useSelector(state => state.user);

  const Layout = () => {
    const { theme } = useContext(ThemeContext);

    return (
      <div className={`theme-${theme ? 'dark' : 'light'}`}>
        <Navbar user={user}/>
        <div style={{display : "flex"}}>
          <LeftbarSection user={user} />
          <Outlet />
          <RightbarSection />
        </div>
      </div>
    );
  }

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
