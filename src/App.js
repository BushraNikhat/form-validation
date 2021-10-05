import React from 'react'
import SignUp from "./components/SignUp"
import {Switch,Redirect,Route} from "react-router-dom"
import Welcome from './components/Welcome'

const App = () => {
  return (
    <>
      <Switch>
            <Route exact path="/"  component={SignUp}/>
            <Route  path="/welcome"  component={Welcome}/>
            <Redirect to="/" />
        </Switch>

    </>
  )
}

export default App
