import { letters } from "../data/letters"

export function KeyboardGrid() {
    return (
        <div className="keyboardContainer">
            {letters.map(letter => (
                <button key={letter} id={`key_${letter}`} className="keyboardContainer__Key">
                {letter}
            </button>
            ))}
        </div>
    )
}
