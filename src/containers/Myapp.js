import React, {Component} from 'react';
import CardList from '../components/CardList';

import Searchbox from '../components/Searchbox';
import './Myapps.css';
import Scroll from '../components/Scroll';

class Myapp extends Component {
    constructor(){
        super()
        this.state={
            Robots:[],
            Searchfield:""
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>this.setState({Robots : users}));
        
    }
    onSearchChange=(event)=>{
        this.setState({Searchfield : event.target.value})
        
    }
    render(){
        const filteredRobots=this.state.Robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className="f2">RoboFriends</h1>
                <Searchbox SearchChange={this.onSearchChange}/>
                <Scroll>   
                    <CardList Robots={filteredRobots}/>
                </Scroll>
            </div>
            
        )
    } 
}

export default Myapp;