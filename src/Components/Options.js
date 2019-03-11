const React = require("react");
import Option from "./Option";
const Options = (props) =>{
    return(
        <div>
            {
                props.options.map((opion)=>(<Option key={option} optionText={option} />)
            }
        </div>
    );
}

export default Options;