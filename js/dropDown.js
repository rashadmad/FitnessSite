///interface becomes too big for small screen
////show a mobile friendly interface for when original interface disappears

//1. create another interface


var $select = $("<select></select>");

$(function ()) {
$("header").append($select);
$(".logo").hide(); }
//2. show interface on button press 
//3. hide select box on higher resolutions