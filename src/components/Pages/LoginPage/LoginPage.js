import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../Context";
import "./LoginPage.css";



function LoginPage({ Login, error }) {
  const [Details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(Details);
  };

  const [context, setContext] = useContext(Context);
  const [user, setUser] = useState({ name: "", email: "" });
  const [isAuth, setisAuth] = useState(false);
  const handleClick = (e) => {
    setisAuth(true);
    Cookies.set("name","logintrue")

  };

  return (
    <>
      <div className="sect">
        <div className="imgbox">
          <img src="https://images.unsplash.com/photo-1581046814283-bad6fdd5b057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"></img>
        </div>

        <div className="contentbox">
          <h2 className="title">VOLKSWAGEN</h2>
          <div className="formbox">
            <h2>Login</h2>
            <div className="errormessage">
            <h3>
            {error != "" ? <div className="error">{error}</div> : ""}
            </h3>
            </div>
            <form onSubmit={submitHandler}>
                <div className="inputbox">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) =>
                      setDetails({ ...Details, name: e.target.value })
                    }
                    value={Details.name}
                  />
                </div>
                <div className="inputbox">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) =>
                      setDetails({ ...Details, email: e.target.value })
                    }
                    value={Details.email}
                  />
                </div>
                <div className="inputbox">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) =>
                      setDetails({ ...Details, password: e.target.value })
                    }
                    value={Details.password}
                  />
                </div>
                <div className="inputbox">
                <input
                  type="submit"
                  value="LOGIN"
                  onClick={handleClick}
                ></input>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
