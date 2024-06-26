import { useContext, useEffect } from "react"
import { GuessesContext } from "../Context/WordToGuessContext"

type GuessRowProps = {
    word: string[],
    isGuessing?: boolean
}

export function GuessesGrid() {
    const {wordToGuess, guesses} = useContext(GuessesContext)

    return (
        <div className="guessesGridContainer">
            <GuessRow word={guesses[0] || []} isGuessing={guesses.length - 1 == 0}/>
            <GuessRow word={guesses[1] || []} isGuessing={guesses.length - 1 == 1}/>
            <GuessRow word={guesses[2] || []} isGuessing={guesses.length - 1 == 2}/>
            <GuessRow word={guesses[3] || []} isGuessing={guesses.length - 1 == 3}/>
            <GuessRow word={guesses[4] || []} isGuessing={guesses.length - 1 == 4}/>
            <GuessRow word={guesses[5] || []} isGuessing={guesses.length - 1 == 5}/>
        </div>
    )
}

function GuessRow({ word, isGuessing }: GuessRowProps) {
    // para cada letra tem que saber se esta no lugar certo 
    // para cada palavra tem que saber se já foi adivinhada ou esta adivinhando 


     // Palavra atual
     if(isGuessing) {
        return (
            <div className="guessesGridContainer__row">
                <div className={`guessesGridContainer__box currentWord`}>{word[0] || ''}</div>
                <div className={`guessesGridContainer__box currentWord`}>{word[1] || ''}</div>
                <div className={`guessesGridContainer__box currentWord`}>{word[2] || ''}</div>
                <div className={`guessesGridContainer__box currentWord`}>{word[3] || ''}</div>
                <div className={`guessesGridContainer__box currentWord`}>{word[4] || ''}</div>
            </div>
        )
    }

    // Palavra já foi
    if (word.length == 5) {
        return (
            <div className="guessesGridContainer__row">
                    <div className={`guessesGridContainer__box`}>{word[0]}</div>
                    <div className={`guessesGridContainer__box`}>{word[1]}</div>
                    <div className={`guessesGridContainer__box`}>{word[2]}</div>
                    <div className={`guessesGridContainer__box`}>{word[3]}</div>
                    <div className={`guessesGridContainer__box`}>{word[4]}</div>
                </div>
        )
    }

    // caixas vazias
    if(word.length == 0) {
        return (
            <div className="guessesGridContainer__row">
                    <div className='empty'></div>
                    <div className='empty'></div>
                    <div className='empty'></div>
                    <div className='empty'></div>
                    <div className='empty'></div>
                </div>
        )
    }
}