import { ReactNode, createContext, useState } from "react"

type GuessesProviderProps = {
    children: ReactNode
}

type GuessesType = string[][] 

type GuessesContextType = {
    wordToGuess: string[],
    guesses: string[][],
    current: number,
    feedBackMessage: string,
    handleLetterButtons: (letter: string) => void
    handleDelButton: () => void
    handleEnterButton: () => void
}

export const GuessesContext = createContext({} as GuessesContextType)

export function GuessesProvider({ children }: GuessesProviderProps) {
    const wordToGuess = ['a', 'u', 'r', 'e', 'o'] // depois vai pegar a palavra dinamicamente
    const [guesses, setGuesses] = useState([[], [],[],[],[],[]] as GuessesType)  
    const [current, setCurrent] = useState(0);
    const [feedBackMessage, setFeedbackMessage] = useState('')


    const handleLetterButtons = (letter: string) => {
        setGuesses(prevGuesses => {
            const newGuess = [...prevGuesses]
            const currentGuess = [...newGuess[current]]

            if (currentGuess.length == 5) {
                return newGuess
            }

            currentGuess.push(letter)
            newGuess[current] = currentGuess;
            return newGuess
        })
    }

    const handleDelButton = () => {
        setGuesses((prevGuesses => {
            const newGuess = [...prevGuesses] 
            const currentGuess = [...newGuess[current]] 

            if (currentGuess.length > 0) {
                currentGuess.pop()
            }

            newGuess[current] = currentGuess
            return newGuess
        }))
    }

    const handleEnterButton = () => {
        if(guesses[current].length != 5) {
            setTimeout(() => {
                setFeedbackMessage('')
            }, 3000);
            setFeedbackMessage('a palavra deve ter 5 letras')
            return; 
        }
        
        setGuesses((prevGuesses) => {
            const newGuess = [...prevGuesses] 
            const currentGuess = [...newGuess[current]] 

            if(check(wordToGuess, currentGuess)) {
                alert('Acertou')
                newGuess[current] = currentGuess
                return newGuess
            }

            return [...prevGuesses]
        })


        if(!check(wordToGuess, guesses[current])) {
            setCurrent((prev) => {
                return prev + 1
            })
        } else {
            setFeedbackMessage('Parabens!')
            setCurrent(10)
        }

        if(current == 5) {
            setFeedbackMessage(`Acabou as chances, a palavra era '${wordToGuess.join('')}'`)
        } else {
            console.log(current)
        }
       
    }

    return (
        <GuessesContext.Provider value={{ wordToGuess, guesses, current, feedBackMessage, handleLetterButtons, handleDelButton, handleEnterButton }}>
            {children}
        </GuessesContext.Provider>
    )
}

function check(wordToGuess: string[], word: string[]): boolean {
    for (let i = 0; i < wordToGuess.length; i++) {
        if(wordToGuess[i] !== word[i]) {
            return false
        }
    }
    return true
}