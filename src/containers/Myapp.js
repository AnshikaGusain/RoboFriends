import React, {useState,useEffect} from 'react';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import Searchbox from '../components/Searchbox';
import './Myapps.css';
import Scroll from '../components/Scroll';

function Myapp(){
    // constructor(){
    //     super()
    //     this.state={
    //         Robots:[],
    //         Searchfield:""
    //     }
    // }
    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>this.setState({Robots : users}));
        
    // }



    const [robots,setRobots]=useState([])
    const [searchfield,setSearchfield]=useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>setRobots(users));
    },[])

    const onSearchChange=(event)=>{
        setSearchfield(event.target.value)
    }
    
    const filteredRobots=robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(!robots.length){
        return <h1>Loading</h1>
    }
    else{
        return (
            <div className='tc'>
                <h1 className="f2">RoboFriends</h1>
                <Searchbox SearchChange={onSearchChange}/>
                <Scroll>   
                    <ErrorBoundary>
                        <CardList Robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            
        )
    }
        
    
}

export default Myapp;