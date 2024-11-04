import React, { useEffect } from "react";
import NavBar from "./components/NavBar.js";
import "./App.css";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router.js";
import { getCookies } from "./utils/cookies.js";
import { setUser } from "./redux/features/userSlice.js";
import { revalidateUserWithIdToken } from "./utils/api.js";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const cookies = getCookies()
    if(cookies.id_token){
      const userInfo = async () => {
        const results = await revalidateUserWithIdToken(cookies.id_token)
        console.log(results, "THESE ARE THE RESULTSSSSSS")
        dispatch(setUser(results))
      }
      userInfo()
    }

    // fetch("http://localhost:3001/business")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //   });
  }, [dispatch]);
  return (

      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>

  );
};

export default App;
