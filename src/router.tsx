import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/shared/navbar";
import { Signin } from "./components/shared/signin";
import Signup from "./components/shared/signup";
import App from "./App";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />,
      <Route path="/signin" element={<Signin />} />,
      <Route path="/signup" element={<Signup />} /> ,
    </>
  )
);
