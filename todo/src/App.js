import React, { Component } from 'react'
import List from './list'
import './App.css'

class App extends React.Component {
 

  render() {
    return (
      <div className="container">
        <div className="row">
        
<div className="col">
  
<List />
</div>
<div>
              <p className="phrase">Let's get some work done!</p>
          </div>
        </div>

      </div>
    )
    
}}
export default App;
