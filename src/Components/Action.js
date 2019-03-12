const React = require("react");
const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePicker} type="button" className="bid_button">Choose Option</button>
        </div>
    );
}

export default Action;