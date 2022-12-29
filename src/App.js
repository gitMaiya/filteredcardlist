import React, { Component } from "react";
import Cardlist from "./component/card-list";
import { Robots } from "./robots";
import SearchBox from "./component/search-box";



class App extends Component{
    constructor() {
        super();
        this.state = {
            robots: Robots,
            searchfrield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfrield: event.target.value }); // searchfiled updated 
        console.log(event.target.value);

    }
//filteredRobots can be used as props instead of this state robots
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfrield.toLowerCase());
        });

        return(
            <div className="tc">
              <h1>RoboFriends</h1>

              <SearchBox searchChange={this.onSearchChange} />
              <Cardlist Robots={filteredRobots}/> 
             </div>
        )

    }
    
}
// onchange event is triggered --> call searchchange --> a prop --> is defind in App 
export default App;