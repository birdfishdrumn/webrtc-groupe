import React, { useEffect } from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import logo from './logo.svg';

import './App.css';
import JoinRoomPage from './components/JoinRoomPage/JoinRoomPage';
import RoomPage from './components/RoomPage/RoomPage';
import IntroductionPage from './components/IntroductionPage/IntroductionPage';
import { connectWithSocketIOServer } from "src/utils/wss";

function App() {
  useEffect(() => {
  connectWithSocketIOServer()
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/join-room">
          <JoinRoomPage/>
        </Route>
            <Route path="/room">
          <RoomPage/>
        </Route>
        <Route path="/">
          <IntroductionPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
