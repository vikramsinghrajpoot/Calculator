import React, { Component } from 'react';


class CalculatorRow extends Component {

    constructor(props){
     super(props)
     this.state = {
     }
     this.buttonPressed = this.buttonPressed.bind(this)

    }

    render(){

         var row;
         
          if(this.props.items.length === 3){//Three buttons
             row = this.props.items.map((item,index)=>{
                return( item == '0' ? <button key = {index} onClick = {this.buttonPressed}  className = 'item0'>{item}</button> : <button  key = {index} onClick = {this.buttonPressed}  className = 'item'>
                    {item}
                </button>)
            })
          }else{
             row = this.props.items.map((item,index)=>{//Four buttons
                //  console.log('item:',item)
                return( <button key = {index} onClick = {this.buttonPressed}  className = 'item'>
                    {item}
                </button>)
            })
          }
        return(
             <div className = 'row'>
               {row}
             </div>
        )
    }

    buttonPressed(e) {
     // console.log(e.target.lastChild.data);
      const value = e.target.lastChild.data
      this.props.getResult(value)
    }
}

export default CalculatorRow;