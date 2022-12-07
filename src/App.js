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

function App() {

  const current_user = true;

  const Layout = () => {
    const { theme } = useContext(ThemeContext);

    return (
      <div className={`theme-${theme ? 'dark' : 'light'}`}>
        <Navbar />
        <div style={{display : "flex"}}>
          <LeftbarSection />
          <Outlet />
          <RightbarSection />
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
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
