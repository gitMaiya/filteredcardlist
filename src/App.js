import React, { Component } from "react";
import Cardlist from "./component/card-list";
import SearchBox from "./component/search-box";
import Scroll from "./component/scoll";

//render sequence : constructor --> render --> componentdidmount --> rerender
class App extends Component{
    //starting state
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfrield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
            return response.json();
        })
        .then(users => {
            this.setState({ robots : users})
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchfrield: event.target.value }); // searchfiled updated 
        console.log(event.target.value);

    }
//filteredRobots can be used as props instead of this state robots
    render() {
        const {robots, searchfrield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfrield.toLowerCase());
        });

        return(
            <div className="tc">
              <h1>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange} />
              <Scroll> 
               <Cardlist Robots={filteredRobots}/> 
              </Scroll>
             </div>
        )

    }
    
}
// onchange event is triggered --> call searchchange --> a prop --> is defind in App 
export default App;