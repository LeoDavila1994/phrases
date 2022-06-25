import Phrase from "./Phrase";
import Author from "./Author";
import Button from "./Button";

const QuoteBox = ( { click, colorR, colorG, colorB, initQuote } ) => {

    return (
        <div className="container">
            <Phrase colorR={colorR} colorG={colorG} colorB={colorB} initQuote={initQuote}/>
            <Author colorR={colorR} colorG={colorG} colorB={colorB} initQuote={initQuote}/>
            <Button click={click} colorR={colorR} colorG={colorG} colorB={colorB}/>
        </div>
    );
};

export default QuoteBox;