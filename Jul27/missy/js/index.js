$(document).ready(function(){


function unselectableText (element){


    element.attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);

};

unselectableText($("box"));
$("box").on('click',function(){
    
  $(this).toggleClass("toggle")
});



$("expand p").hide();
unselectableText($("expand"));


$("expand").on('click',function(){

  let expand=$(this);
  
    let expanded_p =$("expand p");
    if (expanded_p.is(":visible"))
    {
        expanded_p.hide();
        
      expand.height(expand.height()/2);
    }
    else{
       
      expand.height(expand.height() *2);
      expanded_p.show();
    }


})

$("#hide").on("click",function(){
$("hidediv div:first").hide(200,function hideMe(){
 $(this).next('div').hide(200,hideMe);
});

});

$("#show").on("click",function(){
$("hidediv div:first").show(200,function hideMe(){
 $(this).next('div').show(200,hideMe);
});

});

$("#input").on('keyup',function(){
   $("#text").text($("#input").val());
  $("#postme").prop('disabled',false);

});





});