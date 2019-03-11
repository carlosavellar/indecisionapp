import React from "react";
import ReactDOM from "react-dom";


class IndecisionApp extends React.Component{
    state={
        options: ["Inde1", "Inde2", "Inde3"]
    }

    handleAddOption = (option) =>{
        if(!option){
            return "Put something";
        }else if(this.state.options.indexOf(option) > -1){
            return "Já exuiste";
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }
        });

    }

    render(){
        const title = "React Dev.: José Carlos";
        return(
            <div>
                <Header title={title} />
                <Options options={this.state.options}/>
                <Action />
                <HandleAddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) =>{
    return(
        <header>
            <h1>{props.title}</h1>
            {props.subTitle && <h3>{props.subTitle}</h3>}
        </header>
    )
}

const Action = (props) => {
    return(
        <div>
            <button type="button">Choose Option</button>
        </div>
    );
}

Header.defaultProps={
    subTitle: "Senior"
}

const Options = (props) => {
    return(
        <div>
         <button type="button">Remove all</button>
             {props.options.map((option)=>(<Option key={option} optionText={option} />))}
        </div>
    );
}

const Option = (props) => {
    return(
        <div className="option">
            <p className="option__text">{props.optionText}</p>
        </div>
    );
};

class HandleAddOption  extends React.Component{
    state={
        error: undefined
    }

    handleOpt = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        if(error){
            setState(()=>{
                return{
                    error
                }
            });
        }
    }

    render(){
        return(
            <div>
            { this.state.error && <p>this.state.error</p> }
            <form onSubmit={this.handleOpt} className="add-option" onSubmit={this.handleOpt}>
                <input className="add-option__input" type="text" name="option" id="option"></input>
                <button className="button" type="submit">Add options</button>
            </form>
            </div>
        )
    }



}
const app = document.querySelector("#app");
ReactDOM.render(<IndecisionApp />, app);