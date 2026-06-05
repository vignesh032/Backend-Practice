import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <>
     <h1>Vignesh Jokes</h1>
     <p>Jokes : {jokes.length}</p>

     {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
