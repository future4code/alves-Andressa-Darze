import React from "react";
import axios from "axios";
import { useState, useEffect } from "react"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import styled from "styled-components";

const CardProfile = styled.div`
  border-style: dashed;
  border-width: 2px;

`

function App() {

  const [currentScreen, setCurrentScreen] = useState("home")

  const selectScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home />
      case "matches":
        return <Matches />
    }
  }

  const goToHome = () => {
    setCurrentScreen("home")
  }

  const goToMatches = () => {
    setCurrentScreen("matches")
  }

  return (
    <div>
      <Header goToMatches={goToMatches} goToHome={goToHome} currentScreen={currentScreen} />
      {selectScreen()}
    </div>
  );
}

export default App;
