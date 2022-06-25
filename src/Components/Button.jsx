
const Button = ( { click, colorR, colorG, colorB } ) => {
    return (
        <div>
            <div className="align-end">
                <button onClick={click} style={{backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})`}}><i className="fa-solid fa-angle-right"></i></button>
            </div>
        </div>
    );
};

export default Button;