import React from 'react'
import OneOne from './Pages/OneOne'
import OneTwo from './Pages/OneTwo'
import OneThree from './Pages/OneThree'
import OneFour from './Pages/OneFour'
import OneFive from './Pages/OneFive'
import Unicafe from './Pages/Unicafe'
import Anecdotes from './Pages/Anecdotes'
import Button from './components/button/Button'

const App = () => {
  return (
    <>
      <Button text="One One">
        <OneOne />
      </Button>
      <Button text="One Two">
        <OneTwo />
      </Button>
      <Button text="One Three">
        <OneThree />
      </Button>
      <Button text="One Four">
        <OneFour />
      </Button>
      <Button text="One Five">
        <OneFive />
      </Button>
      <Button text="Unicafe">
        <Unicafe />
      </Button>
      <Button text="Anecdotes">
        <Anecdotes />
      </Button>
    </>
  )

}

export default App