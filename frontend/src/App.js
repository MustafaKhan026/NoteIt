import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyNotes from "./screens/Mynotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import ProfileScreen from "./screens/Profile/ProfileScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main style={{ minHeight: "85vh" }}>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/signup" component={RegisterScreen} exact />
          <Route path="/createnote" component={CreateNote} exact />
          <Route path="/note/:id" component={SingleNote} exact />
          <Route path="/mynotes" component={MyNotes} exact />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
