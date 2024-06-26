import { useContext } from "react"
import { letters } from "../data/letters"
import { GuessesContext } from "../Context/WordToGuessContext"


export function KeyboardGrid() {    
    const {handleLetterButtons, handleDelButton, handleEnterButton} = useContext(GuessesContext)

    return (
        <div className="keyboardContainer">
            {letters.map(letter => {
                if(letter == 'del') {
                    return (
                        <button onClick={() => handleDelButton()} key={letter} id={`key_${letter}`} className={`keyboardContainer__Key`}>
                            {letter}
                        </button>
                    )
                } else if (letter == 'enter') {
                    return (
                        <button onClick={() => handleEnterButton()} key={letter} id={`key_${letter}`} className={`keyboardContainer__Key`}>
                            {letter}
                        </button>
                    )
                } else {
                    return (
                        (
                        <button onClick={() => handleLetterButtons(letter)} key={letter} id={`key_${letter}`} className={`keyboardContainer__Key`}>
                            {letter}
                        </button>
                        )
                    )
                }
            })}
        </div>
    )
}
