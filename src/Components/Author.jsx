import letter from "../quotes.json";

const Author = ( {colorR, colorG, colorB, initQuote} ) => {
    return (
        <div className="align-end">
            <p style={{color: `rgb(${colorR}, ${colorG}, ${colorB})`}}>"{" "}{letter[initQuote].author}{" "}"</p>
        </div>
    );
};

export default Author;