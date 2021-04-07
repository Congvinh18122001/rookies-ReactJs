import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { CountdownTimer } from './Components/CountdownTimer/count-down-timer';
import { RatingBar } from './Components/RatingBar/rating-bar';
import { Notification } from './Components/Notifications/Notifications';

function App() {
  return (
    <div className="App">
         <CountdownTimer />
         <RatingBar max={10}></RatingBar>
         <Notification></Notification>
    </div>
  );
}

export default App;
