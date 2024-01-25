import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Psy from "./Pages/Psy";
import Booking from "./Pages/Booking";
import Services from "./Pages/Services";
import Offer from "./Pages/Offer";
import Psycho from "./Pages/Psycho";
import Login from "./Pages/Login";
import New from "./Pages/New";
import Callapp from "./Pages/Call";
import Pro from "./Pages/Pro";
import Role from "./Pages/Role";
import Session from "./Pages/Session";
import Avoffer from "./Pages/Avoffer";
import ILogin from "./Pages/ILogin";
import PLogin from "./Pages/PLogin";
import { useAuth } from "./Store/useAuth";


function App() {
  const {auth} = useAuth()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Psy",
      element: <Psy />,
    },
    {
      path: "/ILogin",
      element: <ILogin />,
    },
    {
      path: "/PLogin",
      element: <PLogin />,
    },
    {
      path: "/Booking/:id",
      element: auth.isAuth ? <Booking /> : <Navigate to="/Login" replace />,
    },
    {
      path: "/Services",
      element: <Services />,
    },
    {
      path: "/Offer",
      element: auth.isAuth ?<Offer /> : <Navigate to="/Login" replace />,
    },
    {
      path: "/Psycho",  // This is the main route for Psycho, without an ID
      element: <Psycho />,
    },
    {
      path: " /Psycho/:id",  // This is the route for Psycho with dynamic ID
      element: <Psycho />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Avoffer",
      element: <Avoffer />,
    },
    {
      path: "/New",
      element: <New />,
    },
    {
      path: "/Session",
      element: <Session />,
    },
    {
      path: "/call",
      element: <Callapp />
    },
    {
      path: "/Pro",
      element: <Pro />
    },
    {
      path: "/Role",
      element: <Role />
    },
  ]);
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
