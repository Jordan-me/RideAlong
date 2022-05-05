import { useEffect, Component, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./containers/Home";
import { Login } from "./containers/Login";
import { SignUp } from "./containers/SignUp";
import { TeamUp } from "./containers/TeamUp";
import { Events } from "./containers/Events";
import { MyProfile } from "./containers/MyProfile";
import { Chat } from "./containers/Chat";
import { NoMatch } from "./containers/NoMatch";
import { NavigationBar } from "./components/NavigationBar";
import { fetchData, fetchUser, fetchInstance } from "./data/data";
const App = () => {
  useEffect(() => {
    fetchUser().then((data) => console.log(data));
    fetchInstance().then((data) => console.log(data));
  }, []);
  return (
    //set
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/findPartner" element={<TeamUp />} />
        <Route exact path="/findEvent" element={<Events />} />
        <Route exact path="/myProfile" element={<MyProfile />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
