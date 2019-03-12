const React = require("react");
import OptionModal from "./OptionModal";
import HandleAddOption from "./HandleAddOption";
import Header from "./Header";
import Options from "./Options";
import Action from "./Action";

export default class IndecisionApp extends React.Component{
    state={
        options: ["Inde1", "Inde2", "Inde3"],
        selectedOption: undefined
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
        this.setState(()=>{
            return{
                selectedOption: option
            }
        });
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

    closeModal = () => {
        this.setState(()=>{
            return{
                selectedOption: false
            }
        });
    }

    componentDidMount() {
        try {
            const jsonOpt = localStorage.getItem("options");
            const options = JSON.parse(jsonOpt);
            if (options) {
                this.setState(() => {
                    return {
                        options
                    }
                });
            }
        } catch (err) {
            console.log(err);
        }
    }


    componentDidUpdate(){
        const json = JSON.stringify(this.state.options);
        const options = localStorage.setItem("options", json);
    }
    componentWillUnmount(){
        console.log("Olavop vai desmontar");
    }

    render(){
        const title = "React Dev.: José Carlos";
        return(
            <div>
                <Header title={title} />
                <div className="container">
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
                <OptionModal 
                     selectedOption={this.state.selectedOption}
                     closeModal={this.closeModal}
                />

        
            </div>
        );
    }
}



