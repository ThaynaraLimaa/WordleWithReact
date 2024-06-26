import { KeyboardGrid } from "./components/KeyboardGrid"
import { Navbar } from "./components/Navbar"
import { GuessesGrid } from "./components/GuessesGrid"
import { GuessesProvider } from "./Context/WordToGuessContext"

function App() {

  return (
    <GuessesProvider>
      <Navbar />
      <GuessesGrid />
      <KeyboardGrid />
    </GuessesProvider>
  )
}

export default App
