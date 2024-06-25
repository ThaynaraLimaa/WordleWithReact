type GridRowProps = {
    className: string
}

export function GuessesGrid() {
    return (
        <div className="guessesGridContainer">
            <GridRow className='guessesGridContainer__box'/>
            <GridRow className='guessesGridContainer__emptyBox'/>
            <GridRow className='guessesGridContainer__emptyBox'/>
            <GridRow className='guessesGridContainer__emptyBox'/>
            <GridRow className='guessesGridContainer__emptyBox'/>
            <GridRow className='guessesGridContainer__emptyBox'/>
        </div>
    )
}

function GridRow({className}: GridRowProps ) {
    return (
        <div className="guessesGridContainer__row">
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
        </div>
    )
}