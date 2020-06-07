import React from "react";

function Star(props) {
    //CONSTRUCTOR

    let x=[];
    for (let i=0; i<props.rates; i++) {
        x.push("");
    }
    
    function renderStar() {
        return (
            <div>
                {x.map((index) => {
                    return <div>
                        ini render star : {index}
                    </div>
                })}
            </div>
        )
    }

    return <div>
        {renderStar(x)}
    </div>
}



export default Star;