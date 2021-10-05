import React, { useState } from "react";
import {useHistory} from "react-router-dom"

// regex 
const nameRe = /^[a-zA-z]{1,}[ a-zA-Z]{1,}$/;
const passwordRe = /^[0-9a-zA-Z]{6,}$/;
const emailRe = /^[A-Za-z0-9._-]{3,}@[A-Za-z]{3,}[.]{1}[a-zA-Z.]{2,6}$/;

const SignupForm = () => {
  const history=useHistory()

  // user detail
  const [detail, setDetail] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { fullName, email, password } = detail;

   // error stores the error message if any of the user input is wrong
   const [error, setError] = useState({
    fullnameErr: "",
    emailErr: "",
    passwordErr: ""
  });
  
  const [invalid,setInvalid]=useState("")   //for creating the red border in field if error.

// event handler for input fields
  const eventHandler = (e) => {
    let { name, value } = e.target;
    setDetail((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

//   validation
const checkValidation = (re, fieldName, err) => {
  const showError=(errMsg)=>{
    setError((pre)=>{
      return {
          ...pre,
          [err]:errMsg
      }
    })
    setInvalid("is-invalid"); 
  }

  if(!fieldName){
    showError("All fields are mandatory")
      
      return false
  }else if(!re.test(fieldName)){

      if( err==="emailErr"){
        showError("please enter valid email id")
      }
      if( err==="fullnameErr"){
        showError("name is not valid")
      }
      if( err==="passwordErr"){
        showError("Password should contain minimum 6 characters only. No symbols allowed.")
      }
      return false
      }
      else{
        return true
      }
  
  }






//   on submission of form
  const onSubmit = (e) => {
    e.preventDefault();
    const fullnameCheck=checkValidation(nameRe, fullName, "fullnameErr") 
    const passwordCheck=checkValidation(passwordRe, password, "passwordErr")
    const emailCheck=checkValidation(emailRe, email, "emailErr") 


    if (fullnameCheck  && emailCheck && passwordCheck) {
        history.push({
          pathname: '/welcome',
          state: {fullName}
      })
          
      } else {
        setTimeout(() => {
          setError({fullnameErr: "",emailErr: "",passwordErr: ""});
          setInvalid("");
        }, 3000);
      }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className={`form-control ${error.fullnameErr && invalid}`}
            id="name"
            aria-describedby="emailHelp"
            onChange={eventHandler}
            name="fullName"
            value={fullName}
          />
          <small className={`text-danger`}>{error.fullnameErr && error.fullnameErr}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className={`form-control ${error.emailErr && invalid}`}
            id="email"
            aria-describedby="emailHelp"
            onChange={eventHandler}
            name="email"
            value={email}
            autoComplete="off"
          />
          <small className={`text-danger`}>{error.emailErr && error.emailErr}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className={`form-control ${error.passwordErr && invalid}`}
            id="password"
            onChange={eventHandler}
            name="password"
            value={password}
            autoComplete="off"
          />
          <small className={`text-danger`}>{error.passwordErr && error.passwordErr}</small>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignupForm;
