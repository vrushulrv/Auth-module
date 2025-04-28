import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  console.log("User :", user);

  return user ? (
    <>
      <div className="App">
        <header className="App-header">
          <h1>{user.name}!, Welcome to the application</h1>
        </header>
      </div>
      <div className="button-group center-container">
        <Link to="/signin" className="submit-btn">
          Logout
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Authentication module</h1>
        </header>
      </div>
      <div className="button-group center-container">
        <Link to="/signup" className="submit-btn">
          Sign Up
        </Link>
        <Link to="/signin" className="submit-btn mr-2">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default Home;
