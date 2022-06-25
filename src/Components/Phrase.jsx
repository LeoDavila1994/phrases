import letter from "../quotes.json";

const Phrase = ({ colorR, colorG, colorB, initQuote }) => {

    return (
        <div>
            <p style={{color: `rgb(${colorR}, ${colorG}, ${colorB})`}}><i className="fa-solid fa-quote-left"></i>{letter[initQuote].quote}</p>
        </div>
    );
};

export default Phrase;