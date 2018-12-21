import React, { Component } from 'react';
import CalculatorRow from '../Modules/CalculatorRow'

class Calculator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: 0
        }
        this.values = []
        this.allOperators = ['C', '+/-', '%', '/', '*', '-', '+', '=']
        this.isDot = false
        this.operator = ''
        this.stack = []
    }


    render() {
        return (
            <div>
                <div className='mainContainer'>
                    <div className='resultRow' ><label>{this.state.result}</label></div>
                    <CalculatorRow getResult={(e) => this.getResult(e)} items={['C', '+/-', '%', '/']} />
                    <CalculatorRow getResult={(e) => this.getResult(e)} items={[7, 8, 9, '*']} />
                    <CalculatorRow getResult={(e) => this.getResult(e)} items={[4, 5, 6, '-']} />
                    <CalculatorRow getResult={(e) => this.getResult(e)} items={[1, 2, 3, '+']} />
                    <CalculatorRow className = 'last' getResult={(e) => this.getResult(e)} items={[0, '.', '=']} />

                </div>
            </div>
        )
    }

    getResult(e) {
        // debugger;

        switch (e) {
            case '+':
            case '-':
            case '*':
            case '/':
            {
                if(this.operator){return}
                this.performOperatorLevelOne(e)
                break
            }
                

            case '=':{
                debugger;
                let str = this.stack.join('')
                let result = eval(str)
                console.log('result:',result);
                this.stack = []
                if(result != 0) {
                    this.stack.push(result)
                }
                this.setState({
                    result:result
                })

                //Reset
                this.values = []
                this.operator = ''
                this.isDot = false
                break
            }

            case '%':
            case '+/-':
            this.performOperatorLevelTwo(e)
            break

            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
            {
                this.createResultRow(e)
                break
            }

            case 'C':
                this.reset()
                break

        }
    }

    contains(array, element) {
        let status = false
        if (array.some(e => e === element)) {
            return true
        } else {
            return false
        }
    }

    reset() {
        this.stack = []
        this.values = []
        this.setState({
            result: 0
        })
        this.operator = ''
    }

    performOperatorLevelTwo(e){// '+/- Or %'

        let result;
        if(e === '%'){
            result = Number(this.state.result) / 100
        }else if(e === '+/-'){
            result = this.state.result > 0 ? -this.state.result : Math.abs(this.state.result)
            this.stack = []
            this.stack.push(result)
        }
        this.setState({
            result: result
        })
        this.operator = ''
        this.values = []
    }

    performOperatorLevelOne(e) {
        this.stack.push(e)
        var result = 0
        this.operator = e
        this.values = []

    }

    createResultRow(e) {
        if(e === '.' &&  this.contains(this.values,'.')){return}//Dont add multiple .
        if(this.values.length == 0 && e === '0'){return}//Zero not allowed

        this.values.push(e)

        const allValues = this.values.join('')
        this.setState({
            result:allValues
        })
        this.stack.push(e)
    }

    isInt(value) {
        var num = /^-?[0-9]+$/;
        return num.test(value);
    }
    
    
    isFloat(value) {
        var num = /^[-+]?[0-9]+\.[0-9]+$/;
        return num.test(value);
    }


}

export default Calculator;