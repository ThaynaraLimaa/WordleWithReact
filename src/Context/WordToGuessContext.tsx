import { ReactNode, createContext, useState } from "react"

type GuessesProviderProps = {
    children: ReactNode
}

type GuessesType = string[][]

type GuessesContextType = {
    wordToGuess: string[],
    guesses: string[][],
    handleLetterButtons: (letter: string) => void
    handleDelButton: () => void
    handleEnterButton: () => void
}

export const GuessesContext = createContext({} as GuessesContextType)

export function GuessesProvider({ children }: GuessesProviderProps) {
    const wordToGuess = ['a', 'u', 'r', 'e', 'o'] // depois vai pegar a palavra dinamicamente
    const [guesses, setGuesses] = useState([[]] as GuessesType)  

    const handleLetterButtons = (letter: string) => {
        setGuesses(prevGuesses => {
            const newGuess = [...prevGuesses]
            const currentGuess = [...newGuess[newGuess.length - 1]]

            if (currentGuess.length == 5) {
                return newGuess
            }

            currentGuess.push(letter)
            newGuess[newGuess.length - 1] = currentGuess;
            return newGuess
        })
    }

    const handleDelButton = () => {
        setGuesses((prevGuesses => {
            const newGuess = [...prevGuesses] 
            const currentGuess = [...newGuess[newGuess.length - 1]] 

            if (currentGuess.length > 0) {
                currentGuess.pop()
            }

            newGuess[newGuess.length - 1] = currentGuess
            return newGuess
        }))
    }

    const handleEnterButton = () => {
        setGuesses((prevGuesses) => {
            const newGuess = [...prevGuesses] 
            const currentGuess = [...newGuess[newGuess.length - 1]] 

            if(currentGuess.length != 5) {
                // Futuras validações: se a palavra não estiver no banco de dados deve retornar um erro
                console.log('Precisa ser 5 letras') // *mostrar erro na tela
                return [...prevGuesses]
            }
        


            console.log(currentGuess)
            return [...prevGuesses, []]
        })

    }

    return (
        <GuessesContext.Provider value={{ wordToGuess, guesses, handleLetterButtons, handleDelButton, handleEnterButton }}>
            {children}
        </GuessesContext.Provider>
    )
}