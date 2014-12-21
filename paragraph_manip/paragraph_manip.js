/**
 * Created by Ann Marie on 7/22/2014.
 */

jQuery(document).ready(function ($){
    getParagraphs();
    $('p:nth-child(3)').css('color','red').css("font-weight", "bold");
});

function getParagraphs(){
    console.log($('p'[3]));
}
