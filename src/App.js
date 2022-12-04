import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';
import Navbar from './components/navbar/Navbar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';

function App() {

  const current_user = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{display : "flex"}}>
          <Leftbar />
          <Outlet />
          <Rightbar />
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
