import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div>
        <Link className="text-blue-600" to={"/login"}>
          Login
        </Link>
      </div>
      <div>
        <Link className="text-blue-600" to={"/signup"}>
          SignUp
        </Link>
      </div>
      <div>
        <Link className="text-blue-600" to={"/bookguide"}>
          Book A Guide
        </Link>
      </div>
      <div>
        <Link className="text-blue-600" to={"/aboutguide"}>
          Guide Details
        </Link>
      </div>
      <div>
        <Link className="text-blue-600" to={"/guideinfo"}>
          Guide
        </Link>
      </div>
    </>
  );
};

export default Home;
