import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class Sorteador extends React.Component {

    state ={
        options:[],
        selectedOption: undefined
    };
    
    handleClearSelected = () =>{
        this.setState(()=>({selectedOption:undefined}));
    }

    handleDelete = () => {
        this.setState(()=>({options:[]}));
    };
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=>option !== optionToRemove)
        }))
    }

    handleSort = () => {
     const randNum = Math.floor(Math.random()* this.state.options.length);
     const option = this.state.options[randNum];
     this.setState(()=> ({selectedOption : option})) ;
     
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Ingrese una opcion valida';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Esa opcion ya existe';
        }

        this.setState((prevState)=>({options: prevState.options.concat(option)}));
    }


    componentDidUpdate(prevProps,prevState){
      if( prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options);
           localStorage.setItem('options',json);
      }
    
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({ options }));
            }   
        }catch(e){
        }  
    }


    render(){
        const title = 'Sorteador';
        const subtitle = 'Elije un ganador al azar!';
        

        return(
            <div>
            <Header title={title} subtitle ={subtitle}/>
            <div className="container">
                <div className="widget">
                    <Options options = {this.state.options} handleDelete = {this.handleDelete} handleDeleteOption = {this.handleDeleteOption}/>
                    <AddOptions handleAddOption = {this.handleAddOption}/>
                </div>
                <Action hasOption= {this.state.options.length > 0} handleSort ={this.handleSort} />
            </div>
            <OptionModal selectedOption = {this.state.selectedOption} handleClearSelected = {this.handleClearSelected} />
           
            </div>
            
        )
    }
}
