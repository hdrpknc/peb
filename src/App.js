import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import winSound from './audio/win.mp3'

class App extends Component {
  constructor(){
    super();
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(oClicks){
    let isWinner = calculateWinner(oClicks);
    if(isWinner){
        document.getElementById("headerText").style.color='red';
        document.getElementById('headerText').innerText ='Project Escalation';
        document.getElementById("introText").style.color='red';
        document.getElementById("introText").innerText ='Lehrgeld gezahlt'
        let audio = new Audio(winSound);
        audio.play();
        setTimeout(function() {
          window.location.reload();
        }, 2000);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="headerText">Welcome to Project Escalation Bingo</h2>
          <div className="App-intro">
            <i className="material-icons">warning</i>
            <h4 id="introText"> This app is for therapeutic purposes </h4>
            <i className="material-icons">warning</i>
          </div>
        </div>
        <Board onCheckWinner={(oClicks) => this.handleCheck(oClicks)}/>
      </div>
    );
  }
}

function calculateWinner(oClicks){
  if(oClicks["0.0"] && oClicks["0.1"] && oClicks["0.2"] && oClicks["0.3"] && oClicks["0.4"]){
    return true;
  }
  if(oClicks["1.0"] && oClicks["1.1"] && oClicks["1.2"] && oClicks["1.3"] && oClicks["1.4"]){
    return true;
  }
  if(oClicks["2.0"] && oClicks["2.1"] && oClicks["2.2"] && oClicks["2.3"] && oClicks["2.4"]){
    return true;
  }
  if(oClicks["3.0"] && oClicks["3.1"] && oClicks["3.2"] && oClicks["3.3"] && oClicks["3.4"]){
    return true;
  }
  if(oClicks["4.0"] && oClicks["4.1"] && oClicks["4.2"] && oClicks["4.3"] && oClicks["4.4"]){
    return true;
  }
  if(oClicks["0.0"] && oClicks["1.0"] && oClicks["2.0"] && oClicks["3.0"] && oClicks["4.0"]){
    return true;
  }
  if(oClicks["0.1"] && oClicks["1.1"] && oClicks["2.1"] && oClicks["3.1"] && oClicks["4.1"]){
    return true;
  }
  if(oClicks["0.2"] && oClicks["1.2"] && oClicks["2.2"] && oClicks["3.2"] && oClicks["4.2"]){
    return true;
  }
  if(oClicks["0.3"] && oClicks["1.3"] && oClicks["2.3"] && oClicks["3.3"] && oClicks["4.3"]){
    return true;
  }
  if(oClicks["0.4"] && oClicks["1.4"] && oClicks["2.4"] && oClicks["3.4"] && oClicks["4.4"]){
    return true;
  }
  if(oClicks["0.0"] && oClicks["1.1"] && oClicks["2.2"] && oClicks["3.3"] && oClicks["4.4"]){
    return true;
  }
  if(oClicks["4.0"] && oClicks["3.1"] && oClicks["2.2"] && oClicks["1.3"] && oClicks["0.4"]){
    return true;
  }
  return false;
}

export default App;
