const React = require("react");

const Option = (props) => {
    return(
        <div className="option">
            <p className="option__text">{props.optionText}</p>
            <button onClick={(e)=>{
                e.preventDefault();
                props.handleDeleteOption(props.optionText);
            }}>X</button>
        </div>
    );
};

export default Option;