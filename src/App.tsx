import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./styles/SignIn.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <BrowserRouter>
     <UserProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      </UserProvider>
    </BrowserRouter>
  );
}

