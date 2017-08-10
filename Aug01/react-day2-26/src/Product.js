import React, {Component} from 'react';

class Product extends Component{



constructor(){

    super();

    
    this.state={color:"white"};
    
}

componentWillReceiveProps(props){

 if (props.isInCart){
     this.setState({
         color:'lightgray'
     });
 }
 else{
     this.setState({
         color:'white'
     });
 }
 

}



render(props){
    let buyButton= (this.props.isInCart)?
    <button onClick={(event)=>this.props.removeProduct(this.props.index)}>Remove</button>
    :<button onClick={()=>this.props.buyProduct(this.props.index)}>Buy</button>;
    console.log("isInCart is " + this.props.isInCart);
    let bgObj = {
        backgroundColor:this.state.color
    };
    return (
        <div className="product" style={bgObj}>
          <h1>Picture</h1>
          <h2>{this.props.title}</h2>
          <h3>{this.props.description}</h3>
          <h4>{this.props.price}</h4> 
          
          <h5>{buyButton}</h5> 
        </div>
    );
}

}
export default Product