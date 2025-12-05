import './App.css'
import {LoadingScreen} from "./components/LoadingScreen" 
import {Navbar} from "./components/Navbar"
import {HomeBG} from "./components/HomeBG"
import "./index.css"
import {useState, useEffect} from "react";

function App() {
  const [isLoaded, setIsLoaded ] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete = {() => setIsLoaded(true)} />}

      <div className = {`min-h-screen 
        transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} text-gray-100`}>
       
        <HomeBG/>
        <Navbar />


      </div>
    </>
  )
}

export default App
