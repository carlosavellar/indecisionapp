const React = require("react");
import Option from "./Option";
import { defaultCoreCipherList } from "constants";

const Options = (props) => {
    return(
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
                <button 
                    className="button button--link" 
                    onClick={props.removeAll}
                >Remove All
                </button>            
            </div>
             {props.options.length < 0 && <p className="widget__message">Put some options</p>}
             {props.options.map((option)=>(<Option 
                                                key={option} 
                                                optionText={option}
                                                handleDeleteOption={props.handleDeleteOption}
                                                />))}
        </div>
    );
}

export default Options;
