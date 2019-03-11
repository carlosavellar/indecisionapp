const React = require("react");
import Options from "./Options";

export default class IndecisionApp{
    state={
        options: []
    }

    render(){
        return(
            <div>
                <Options options={this.state.options}/>
            </div>
        );
    }
}