import { useContext } from "react"
import { GuessesContext } from "../Context/WordToGuessContext"

export function GameFeedback() {
    const {feedBackMessage} = useContext(GuessesContext)

    return (
       <>
            {feedBackMessage && (
                 <div className="gameFeedback">{feedBackMessage}</div>
            )}
       </>
    )
}