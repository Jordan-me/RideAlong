import React, {
  useEffect,
  Component,
  Fragment,
  useState,
  createContext,
} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import { Login } from "./containers/Login";
import { SignUp } from "./containers/SignUp";
import { TeamUp } from "./containers/TeamUp";
import { Events } from "./containers/Events";
import { MyProfile } from "./containers/MyProfile";
import { Chat } from "./containers/Chat";
import { NoMatch } from "./containers/NoMatch";
import NavigationBar from "./components/NavigationBar";
import EventsCalendar from "./containers/EventsCalendar";
//test NOA
const App = () => {
  const Context = createContext("default val");
  // const [loggedInState, setLoggedInState] = useState(false);
  // const handleLogin = (loginState) => {
  //   setLoggedInState(loginState);
  // };
  return (
    //set
    <BrowserRouter>
      <loginContext.Provider Context={{ loginState: false }}>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/findPartner" element={<TeamUp />} />
          <Route exact path="/findEvent" element={<Events />} />
          <Route exact path="/myProfile" element={<MyProfile />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/calendar" element={<EventsCalendar />} />
          <Route element={<NoMatch />} />
        </Routes>
      </loginContext.Provider>
    </BrowserRouter>
  );
};

export default App;
