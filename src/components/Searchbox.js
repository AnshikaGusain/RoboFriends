import React from 'react';

const Searchbox=({SearchChange})=>{
    return (
        <div className='pa1'>
            <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder='Search Robots' onChange={SearchChange}/>
        </div>
        
    );
}

export default Searchbox;