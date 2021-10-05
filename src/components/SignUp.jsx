import React from 'react'
import SignupForm from './SignupForm'


const SignUp = () => {
    const imageUrl='/images/ai-logo.jpg'

    const styleLeft={backgroundImage:`linear-gradient( rgba(0,0,0,.5), rgba(0, 0, 0, 0.5)),url(${imageUrl})`}
    return (
        <>
         <div className="signup">
             <div className="signup-wrapper row   w-100 h-100 g-0">
                 <div className="col-sm-6 col-12 mx-auto signup-left d-flex flex-column align-items-center justify-content-center" style={styleLeft}>
                     <h3>WELCOME TO</h3>
                     <h4>BOTSPOT</h4>
                 </div>
                 <div className="col-sm-6 col-11 p-md-5 p-2 px-2  mx-auto signup-right d-flex flex-column justify-content-center">
                 <div className="right-wrapper ">
                    <h4  className="text-center">CREATE ACCOUNT</h4>
                     <SignupForm/>
                 </div>
                    
                 </div>
             </div>
         </div>
        </>
    )
} 

export default SignUp
