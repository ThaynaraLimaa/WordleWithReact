import { KeyboardGrid } from "./components/KeyboardGrid"
import { Navbar } from "./components/Navbar"
import { GuessesGrid } from "./components/GuessesGrid"
import { GuessesProvider } from "./Context/WordToGuessContext"
import { GameFeedback } from "./components/GameFeedback"

function App() {

  return (
    <GuessesProvider>
      <Navbar />
      <GameFeedback/>
      <GuessesGrid />
      <KeyboardGrid />
    </GuessesProvider>
  )
}

export default App
