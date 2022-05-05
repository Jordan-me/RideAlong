import { useEffect ,Component,Fragment} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home}from './pages/Home';
import {Login}from './pages/Login';
import {SignUp}from './pages/SignUp';
import {TeamUp}from './pages/TeamUp';
import {Events}from './pages/Events';
import {MyProfile}from './pages/MyProfile';
import {Chat}from './pages/Chat';
import {NoMatch}from './pages/NoMatch';
import {NavigationBar}from './components/NavigationBar';
import { fetchData, fetchUser,fetchInstance } from "./data/data";
const App = () => {
  useEffect(() => {
    fetchUser().then((data) => console.log(data));
    fetchInstance().then((data) => console.log(data));
  }, []);
  return(
      //set
      <BrowserRouter>
        <NavigationBar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/findPartner" element={<TeamUp/>}/>
            <Route exact path="/findEvent" element={<Events/>}/>
            <Route exact path="/myProfile" element={<MyProfile/>}/>
            <Route exact path="/chat" element={<Chat/>}/>
            <Route element={<NoMatch/>}/>

          </Routes>

      
      </BrowserRouter>
  );
 
};

export default App;
