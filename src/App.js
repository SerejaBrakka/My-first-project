import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/ProfileContent/Profile";
import { Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import Groups from "./components/Groups/Groups";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Videos from "./components/Videos/Videos";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import VideosContainer from "./components/Videos/VideosContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/music" element={<Music />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/videos" element={<VideosContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
