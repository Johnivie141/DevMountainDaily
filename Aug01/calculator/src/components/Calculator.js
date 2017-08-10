import React, { Component } from 'react';
import CalculatorImg from './calculator.png';

export default class CalculatorApp extends Component{
   


constructor(props){
    super(props)

    this.state={
        calcString:"",
        displayString:"0"
    }
}
setDisplay(value){
let newDisplay= Number(this.state.displayString  + value).toString();
console.log("newDisplay " + newDisplay);
if (newDisplay.length <13){
  this.setState({displayString: newDisplay});
  console.log("setting to "+ newDisplay);

}
}
clear(){
    this.setState({displayString:"0",calcString:"'"})
}


operator(op){
    let newCalcString= this.state.calcString + " " +this.state.displayString + " " +op + " ";
    this.setState({calcString:newCalcString,displayString:""});

}
evaluate(expr){
   const divMul = /(-?[0-9.]+)\s*(\/|\*)\s*(-?[0-9.]+)/;
   const addSub = /(-?[0-9.]+)\s*(\+|-)\s*(-?[0-9.]+)/;

   console.log("evaluate 1" +expr);
   let match = divMul.exec(expr);
   while(match){
     console.log("match multdiv");
      let x=Number(match[1]);
      let op =match[2];
      let y = Number(match[3]);
      let result = (match[2]==='*')?x*y:x/y;
      console.log("divMul: "+ result);
       expr = expr.substring(0, match.index) + result + expr.substring(match.index + match[0].length); 
       match = divMul.exec(expr);
   }
   console.log("evaluate2: " +expr);
   match = addSub.exec(expr);
   while(match){
      let x=Number(match[1]);
      let op =match[2];
      let y = Number(match[3]);
      let result = (op==='+')?x+y:x-y;

console.log("addSub Result: "+result);
       expr = expr.substring(0, match.index) + result + expr.substring(match.index + match[0].length); 
       match = addSub.exec(expr);
   }
   
   console.log("evaluate = " + expr);
 return expr;
 

}
calculate(){

console.log("calculate0: "+ this.state.calcString + " display " + this.state.displayString);
  let expr = this.state.calcString + " " + this.state.displayString;
  expr = expr.replace(/(?:\+|\*|\/|\-) *$/,"");
  console.log("calculate " +expr);
  const parens = /(-?)\(([^()]+)\)/;

   let match = parens.exec(expr);
   while(match){
      let result = this.evaluate(match[1]);


      if (match[2])
        result  = result.startsWith("-") ? result.substring(1) : "-" + result;

       expr = expr.substring(0, match.index) + result + expr.substring(match.index + match[0].length); 
       match = parens.exec(expr);
   }
 let result = this.evaluate(expr);
 console.log("final result: " + result);
 result=result.toString();
 if (result.length >13) result = result.slice(0,14);
 this.setState({
   displayString:result,
   calcString:""
 })
}



render(){

return (
      <div id="calculator-container">
        <input id="header-input" onChange={ (e) => { this.updateHeader(e.target.value); }}/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={CalculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">

          <div className="output">
            <span className="total">{this.state.displayString}</span>
          </div>

          <div className="btn clear" onClick={(e)=>this.clear()}></div>

          <div className="btn zero"   onClick={ () => { this.setDisplay('0'); } }></div>
          <div className="btn one"    onClick={ () => { this.setDisplay('1'); } }></div>
          <div className="btn two"    onClick={ () => { this.setDisplay('2'); } }></div>
          <div className="btn three"  onClick={ () => { this.setDisplay('3'); } }></div>
          <div className="btn four"   onClick={ () => { this.setDisplay('4'); } }></div>
          <div className="btn five"   onClick={ () => { this.setDisplay('5'); } }></div>
          <div className="btn six"    onClick={ () => { this.setDisplay('6'); } }></div>
          <div className="btn seven"  onClick={ () => { this.setDisplay('7'); } }></div>
          <div className="btn eight"  onClick={ () => { this.setDisplay('8'); } }></div>
          <div className="btn nine"   onClick={ () => { this.setDisplay('9'); } }></div>

          <div className="btn equal" onClick={(e)=>this.calculate()}></div>
          <div className="btn multiply" onClick={(e)=>this.operator("*")}></div>
          <div className="btn divide" onClick={(e)=>this.operator("/")}></div>
          <div className="btn subtract" onClick={(e)=>this.operator("-")}></div>
          <div className="btn add" onClick={(e)=>this.operator("+")}></div>
        </div>
      </div>


);


}


}
