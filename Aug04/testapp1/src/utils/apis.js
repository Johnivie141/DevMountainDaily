import axios from 'axios';
   const  magickUrl=`https://api.magicthegathering.io/v1/cards`



function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}



export function getMagicCards(){
    let myPromise = new Promise(
      function(resolve,reject){
         let oldCards=null;
         let supportsHtml5Storage=supports_html5_storage();
         if(supportsHtml5Storage){
            oldCards = localStorage.getItem("Cards");
            if (oldCards){
              oldCards = JSON.parse(oldCards);

              console.log("Using oldCards");
            }
            else oldCards=null;
         }

         if (oldCards ===null)
         {
           let pagenum = Math.floor(Math.random()*200);
           let fullUrl = magickUrl + `?page=${pagenum}&types=creature`
           console.log(fullUrl);
           axios.get(fullUrl).then((res) =>{
           let tmpCards=res.data.cards.filter(
           (card)=>{return card.toughness && card.toughness>0 && card.power && card.power >0}); 
            let newCards=[];
            while(newCards.length<50){
              newCards=newCards.concat(tmpCards);
            }

            localStorage.setItem("Cards",JSON.stringify(newCards));  
            return  resolve(newCards);
           });
         }
         else{
           return resolve(oldCards);
         }
        
    })
    return myPromise;
}

     
   
