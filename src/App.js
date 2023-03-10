import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { Fragment, useEffect } from "react";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path="/login" element={<Login />} />
          <Route
            path="checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="payment"
            element={
              <>
                <Header />
                <Payment />
              </>
            }
          />

          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Home />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
