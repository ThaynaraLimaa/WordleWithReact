import { KeyboardGrid } from "./components/KeyboardGrid"
import { Navbar } from "./components/Navbar"
import { GuessesGrid } from "./components/GuessesGrid"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <GuessesGrid/>
      <KeyboardGrid/>
    </>
  )
}

export default App
