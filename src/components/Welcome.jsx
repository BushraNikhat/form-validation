import React from 'react'
import { useLocation } from "react-router-dom";


const Welcome = () => {
    const location = useLocation();
    
    return (
        <>
      <div className="welcome">
             <div className="welcome-wrapper w-100 h-100 g-0 d-flex flex-column justify-content-center align-items-center">
                    <h3>Hello, {location.state.fullName} !</h3>
                    <h4>Welcome to the world of Artificial Intelligence.</h4>
                    
             </div>
             
             </div>
            
        </>
    )
}

export default Welcome
