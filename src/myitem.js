import React from "react";

class Starwars extends React.Component{
    render(){
        return(
          <div>
          <h1>Name</h1>  
          <p> Height </p>
          <ul>
              <li>films in here </li>
          </ul>
          <button type="button" className="btn">Randomize character</button>
          </div>
        )
    }
}

function App(){
    return(
        <div className="App">
            <header className="App-header">
                <Starwars/>
            </header>

        </div>
    )
}