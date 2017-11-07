(function($){
  $(function(){

    $('.button-collapse').sideNav();
  }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function() {
   $('select').material_select();
   $('ul.tabs').tabs();
 });

export function initCounter(){
  $('input#address').characterCounter();
}
