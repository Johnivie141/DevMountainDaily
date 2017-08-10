import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from  './Product'

class App extends Component {
  constructor(){
    super();
    this.state={
      products: [
         {
           imageUrl:'',
           title:"Coconuts",
           description:"Tasty fruit",
           price:"3.70",
           isInCart:false
         },
         {
           imageUrl:'',
           title:"Coco Puffs",
           description:"Tasty cereal",
           price:"3.50",
           isInCart:false
         },
           {
           imageUrl:'',
           title:"Coco butter",
           description:"Smooth skin lotion",
           price:"2.50",
           isInCart:false
         },
           {
           imageUrl:'',
           title:"Cocoa, hot",
           description:"Tasty beverage",
           price:"35.50",
           isInCart:false
         },
           {
           imageUrl:'',
           title:"Cocoa powder",
           description:"Not Tasty powdery stuff",
           price:"3.50",
           isInCart:false
         },






      ]
      
    }
    this.removeProduct= this.removeProduct.bind(this);
    this.buyProduct= this.buyProduct.bind(this);
  }
  buyProduct(index){
    let productsCopy=this.state.products.slice(0);
     
     productsCopy[index].isInCart=true;
    this.setState({
      products:productsCopy
    })
    

  }

  removeProduct(index){
    let productsCopy=this.state.products.slice(0);
     
     productsCopy[index].isInCart=false;
    this.setState({
      products:productsCopy
    })
    

  }
  render() {
   let products=[];
  //  for (let i=0;i<this.state.products.length;i++){
  //    var product=this.state.products[i];
  //     products.push(<Product  imageUrl={product.imageUrl} 
  //                             title={product.title} 
  //                             description={product.description} 
  //                             price={product.price}/>)
  //  }


products =this.state.products.map((x,index)=>(<Product  imageUrl={x.imageUrl} 
                              title={x.title} 
                              description={x.description} 
                              price={x.price} 
                              isInCart={x.isInCart} 
                              buyProduct={this.buyProduct} 
                              key={index}
                              index={index}
                              removeProduct={this.removeProduct}
                              />));
  
   

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {products}
            </div>
    );
  }
}

export default App;
