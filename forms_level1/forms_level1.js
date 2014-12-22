/**
 * Created by Ann Marie on 12/22/2014.
 */
//when form is submitted

function prepareEventHandlers(){
    document.getElementById("contact").onsubmit = function(){
        //prevent form from submitting if there is no email
        if(document.getElementById("email").value == "") {      //if email value is empty, then
            document.getElementById("error_msg").innerHTML = "Please enter in e-mail";  //display error message within error_msg div
            //to stop form from submitting
            return false;
        }else{
            document.getElementById("error_msg").innerHTML = "";    //if e-mail field is filled, error_msg div remains empty
            //to allow form to submit
            return true;
        }
    }

}





//when the document loads

window.onload = function(){
    prepareEventHandlers();

};

