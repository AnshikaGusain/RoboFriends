import React, {Component} from 'react';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
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
        const { Robots, Searchfield}=this.state;
        const filteredRobots=Robots.filter(robot=>{
            return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
        })
        if(!Robots.length){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className="f2">RoboFriends</h1>
                    <Searchbox SearchChange={this.onSearchChange}/>
                    <Scroll>   
                        <ErrorBoundary>
                            <CardList Robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                
            )
        }
        
    } 
}

export default Myapp;