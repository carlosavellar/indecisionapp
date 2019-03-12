import React from "react";
export default class HandleAddOption  extends React.Component{
    state={
        error: undefined
    };
    handleOpt = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        if(error){
            this.setState(()=>{
                return{
                    error
                }
            });
        }
    }

    render(){
        return(
            <div>
            { this.state.error && <p className="add-option-error">{this.state.error}</p> }
            <form onSubmit={this.handleOpt} className="add-option" onSubmit={this.handleOpt}>
                <input className="add-option__input" type="text" name="option" id="option"></input>
                <button className="button" type="submit">Add options</button>
            </form>
            </div>
        )
    }
}

    