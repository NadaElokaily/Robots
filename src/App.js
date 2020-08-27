import React,{Component} from 'react';
import SearchField from './SearchField'
import CardList from './CardList'
import {robots} from './robots'
import Scroll from './Scroll'

class App extends Component {
  constructor(){
    super();
    this.state={
      searchVal : "",
      robots : []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}))
    // this.setState({robots:robots})
  }
  onChangeSearch = (event)=>{    
    this.setState({searchVal:event.target.value})
  }
  render(){
    const filteredRobots = robots.filter((robot,i)=>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchVal.toLocaleLowerCase())
    })
    console.log(filteredRobots)
    return (
      <div className="tc">
        <h1 style={{color:'#fff'}}>Robo Friends</h1>
        <SearchField value={this.state.searchVal} onChangeSearch={this.onChangeSearch}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
    </div>
    );
  }
}

export default App;
