import { useContext } from "react"
import { GuessesContext } from "../Context/WordToGuessContext"

type GuessRowProps = {
    word: string[],
    index: number
}

export function GuessesGrid() {
    const { guesses } = useContext(GuessesContext)

    return (
        <div className="guessesGridContainer">
            {guesses.map((guess, ind) => (
                <GuessRow key={ind} word={guess} index={ind}/>
            ))}
        </div>
    )
}

function GuessRow({ word, index }: GuessRowProps) {
    const { wordToGuess, current } = useContext(GuessesContext)

     if(index === current) {
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

    if (word.length == 5) {
        return (
            <div className="guessesGridContainer__row">
                {word.map((letter, ind) => (
                    <div key={ind} className={`guessesGridContainer__box ${getClassName(letter, ind, wordToGuess)}`}>
                        {letter}
                    </div>
                ))}
                </div>
        )
    }

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

function getClassName(letter: string, position: number, wordToGuess: string[]): string {
    if (!wordToGuess.find((l) => l == letter)) {
        return 'wrong'
    }

    if (wordToGuess[position] == letter) {
        return 'right'
    } else {
        return 'place'
    }
}