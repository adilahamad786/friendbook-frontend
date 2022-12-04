import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Login />
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
