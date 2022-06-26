import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Groups from "./components/Groups/Groups";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/ProfileContent/Profile";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import VideosContainer from "./components/Videos/VideosContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar store={props.store} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/music" element={<Music />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/videos" element={<VideosContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
