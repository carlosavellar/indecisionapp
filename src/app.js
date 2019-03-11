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
            return "Já existe";
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }
        });

    }

    handlePicker = () => {
        const num = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[num];
        alert(option);
    }

    handleDeleteOption = (optionText) => {
        this.setState((prevState)=>{
                 return{
                     options: prevState.options.filter((option)=>optionText !== option) 
                 } 
        });
    }

    removeAll= () => {
        this.setState(()=>{
            return{
                options: []
            }
        });
    }

    render(){
        const title = "React Dev.: José Carlos";
        return(
            <div>
                <Header title={title} />
                 <Options 
                    handleDeleteOption={this.handleDeleteOption}
                    options={this.state.options}
                    removeAll={this.removeAll}
                />
                <Action 
                    handlePicker={this.handlePicker}
                />
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
            <button onClick={props.handlePicker} type="button">Choose Option</button>
        </div>
    );
}

Header.defaultProps={
    subTitle: "Senior"
}

const Options = (props) => {
    return(
        <div>
         <button onClick={props.removeAll} type="button">Remove all</button>
             {props.options.map((option)=>(<Option 
                                                key={option} 
                                                optionText={option}
                                                handleDeleteOption={props.handleDeleteOption}
                                                />))}
        </div>
    );
}

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

class HandleAddOption  extends React.Component{
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
            { this.state.error && <p>{this.state.error}</p> }
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