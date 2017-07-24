/**
 * Created by john on 7/24/17.
 */
// Callback tutorial

function funkTown(cb){
    console.log(cb());

}

function takeMeTo(){

    return 'Funky Town'
}
function school(){
    return 'house of rock';
}



funkTown(takeMeTo)
funkTown(school)
