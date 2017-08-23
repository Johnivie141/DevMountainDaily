import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import './Magick.css';
import {getMagicCards} from '../utils/apis'

export default class Magick extends Component{

 constructor(){
  super();
 
 
   this.state={
     playerDeckPosition:0,
     selectedPosition:0,
     playerCards:null,
     pcCards:null,
     selectedPlayerCards:null,
     selectedPCCards:null,
     winner:null,
     message:'',
     loser:null,
     cards:null
   };

   this.fight=this.fight.bind(this);

}
getValue(card){
    let manacoststr=card.manaCost;
    let manapoints=0;
    while(/\{.\}/.test(manacoststr)){
        manacoststr=manacoststr.replace(/\{(\d)\}/,function(match,points){
            manapoints +=Number(points);
        })
        manacoststr=manacoststr.replace(/\{([a-zA-Z])\}/,function(match,points){
            manapoints +=1;
        })
    }
     let value = Number(card.toughness) + Number(card.power) - manapoints;
  
    return value;
    
}

fight(){
    let newArray=[];
    let pcCards=this.state.pcCards.slice(0);
  
    
    for (let i=0;i<3;i++){
    let index = Math.floor(Math.random()*pcCards.length);
    newArray.push(pcCards.splice(index,1)[0]);
}

  this.setState({
      pcCards:pcCards,
      selectedPCCards:newArray
  });
    setTimeout(this.resolve.bind(this),2000);
}

 resolve(){
     
 let selectedPCCards=this.state.selectedPCCards.slice(0);
 let  selectedPlayerCards=Object.assign({},this.state.selectedPlayerCards); 
 let winCount=0;
 let drawCount=0;
 let message="";
 let pcCard=null;
 let playerCard=null;
 let loseCount=0;
 for (let i=0;i<3;i++){
   pcCard=selectedPCCards[i];
   playerCard=selectedPlayerCards[i];
   let pcValue= this.getValue(pcCard);
   let playerValue =this.getValue(playerCard);
   if (playerValue > pcValue) winCount++;
   if (playerValue ==pcValue) drawCount++;
   if (playerValue <pcValue) loseCount++;
 }
 let newPlayerCards=this.state.playerCards.slice(0);
 let newPCCards=this.state.pcCards.slice(0);;
 
if (winCount ==1 && drawCount>0){
   // pc gets cards
   for (let i=0;i<3;i++){
      newPCCards.push(this.state.selectedPCCards.splice(0,1)[0]);
      newPlayerCards.push(this.state.selectedPlayerCards.splice(0,1)[0]);
      
   }
   message="Draw!";
 }
 
 if (winCount <2 && drawCount<1){
   // pc gets cards
   for (let i=0;i<3;i++){
      newPCCards.push(this.state.selectedPlayerCards.splice(0,1)[0]);
      newPCCards.push(this.state.selectedPCCards.splice(0,1)[0]);
      
   }
   message="You Lose";
 }

 if (winCount >1){
   // player gets cards
   for (let i=0;i<3;i++){
      newPlayerCards.push(this.state.selectedPlayerCards.splice(0,1)[0]);
      newPlayerCards.push(this.state.selectedPCCards.splice(0,1)[0]);  
   }
   message="You Win";
 }
 let newCards = this.state.cards;
newPlayerCards.push(this.pickACard(newCards));
newPCCards.push(this.pickACard(newCards));


this.setState({
    cards:newCards,
    playerCards:newPlayerCards,
    pcCards:newPCCards,
    selectedPlayerCards:null,
    selectedPCCards:null,
    message:message
})

  
 
   


   
   
  
}



selectPlayerCard(event,index){
// this function will select the player Card

 if (index > this.state.playerCards.length)return ;
  let newPlayerDeck=this.state.playerCards.slice(0);
  let newSelected = (this.state.selectedPlayerCards===null)?[]:this.state.selectedPlayerCards;

  newSelected.push(newPlayerDeck.splice(index,1)[0]);
  this.setState({
      playerCards:newPlayerDeck,
      selectedPlayerCards:newSelected
  });

}
unSelectPlayerCard(event){
// this function will select the player Card
    
}


nextDeckCards(){
    let currentpos = this.state.playerDeckPosition +1;
    if (currentpos%this.state.playerCards.length===0) currentpos=0;
    this.setState({
        playerDeckPosition: currentpos

    });
}

pickACard(cards){
    let newCard =cards.splice(Math.floor(Math.random()*cards.length),1)[0];

return newCard;
}
componentDidMount(props){
 getMagicCards()
 .then((res)=>{
     let newCards=res;
     let newPlayerCards =[];
     let newPCCards=[];
     

     for (let i=0;i<7;i++){
        let newCard = this.pickACard(newCards);
       
        newPlayerCards.push(newCard);

        newPCCards.push(this.pickACard(newCards));
     }

    
    

     this.setState({
         cards:newCards,
         pcCards:newPCCards,
         playerCards:newPlayerCards
         
     })

 }
 );
 
}

 render(){
     let pcCards=null;
     
     let playerCards=null;
     if (this.state.playerCards!==null){  
         playerCards=[];
         for (let i=0;i<3 && i<this.state.playerCards.length;i++){
          
       let cardNumber =(this.state.playerDeckPosition +i)%this.state.playerCards.length;
       let card = this.state.playerCards[cardNumber];     
       playerCards.push((<span className="playerCardSpan" onClick={(e)=>{this.selectPlayerCard(e,cardNumber)}} key={cardNumber}><img  className="cardImage" alt={card?card.name + ": " + this.getValue(card):""} src={card?card.imageUrl:''}  /></span>));

      }
     }
     
  
    //   playerCards = this.state.playerCards===null?null:this.state.playerCards.map((card,index)=>{
     
    //    if ((index ===this.state.playerDeckPosition%this.state.playerCards.length)||
    //       (index ===(this.state.playerDeckPosition+1)%this.state.playerCards.length)||
    //       (index ===(this.state.playerDeckPosition+2)%this.state.playerCards.length)
    //    ){
    //        console.log("index " +index);
    //        return (<span className="cardSpan" onClick={(e)=>{this.selectPlayerCard(e,index)}} key={index}><img  alt={card?card.name:""} src={card?card.imageUrl:''}  /></span>);
    //    }
    //    else return '';
    //  });
    
     let selectedPlayerCards=null;
     selectedPlayerCards = this.state.selectedPlayerCards===null?null:this.state.selectedPlayerCards.map((card,index)=>{
  
     if ((index ===this.state.selectedPosition%this.state.selectedPlayerCards.length)||
          (index ===(this.state.selectedPosition+1)%this.state.selectedPlayerCards.length)||
          (index ===(this.state.selectedPosition+2)%this.state.selectedPlayerCards.length)
       ){
           
         return ( <span className="cardSpan" onClick={(e)=>{this.unSelectPlayerCard(e,index)}} key={index}><img  className="cardImage" alt={card?card.name:""} src={card?card.imageUrl:''}  /></span>);
   
       }  
       else return '';  
   });

// pc SelectedCards
   let selectedPCCards=null;
     selectedPCCards = this.state.selectedPCCards===null?null:this.state.selectedPCCards.map((card,index)=>{     
         return ( <span className="cardSpan"  key={index}><img  className="cardImage" alt={card?card.name:""} src={card?card.imageUrl:''}  /></span>);
    
   });

  return (
     <section className="Magick">
       
       <div className="pcCards">
           <div className="health">{this.state.pcHealth}</div>
           <div className="">{}</div>
       </div>
       <div className=" selectedPC">  
           <div className="showCards">{selectedPCCards}</div>
       </div>
       
       
       <div className="selectedPlayer">
           <div className=" actionButton">
          <button className="btn btn-primary" onClick={(e)=>this.fight()} >Play</button> 
          </div>
           <div className="">{selectedPlayerCards}</div>
       </div>
       <div className="playerCards">
           <div className="" onClick={e=>this.nextDeckCards()}>Next</div>
           <div className="">{playerCards}</div>
           <div className="health">{this.state.playerHealth}</div>
       </div>
       {this.state.message}
      
   </section>
   );
  }
}