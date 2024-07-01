import { useContext } from "react"
import { letters } from "../data/letters"
import { GuessesContext } from "../Context/WordToGuessContext"

export function KeyboardGrid() {    
    const {current, handleLetterButtons, handleDelButton, handleEnterButton} = useContext(GuessesContext)

    return (
        <div className="keyboardContainer">
            {letters.map(letter => {
                if(letter == 'del') {
                    return (
                        <button onClick={() => handleDelButton()} key={letter} id={`key_${letter}`} className={`keyboardContainer__Key`} disabled={current == 10}>
                            {letter}
                        </button>
                    )
                } else if (letter == 'enter') {
                    return (
                        <button onClick={() => handleEnterButton()} key={letter} id={`key_${letter}`} className={`keyboardContainer__Key`} disabled={current == 10}>
                            {letter}
                        </button>
                    )
                } else {
                    return (
                        (
                        <button onClick={() => handleLetterButtons(letter)} key={letter} id={`key_${letter}`} className={`keyboardContainer__Key`} disabled={current == 10}>
                            {letter}
                        </button>
                        )
                    )
                }
            })}
        </div>
    )
}
