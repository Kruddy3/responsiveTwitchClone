$(function(){

  $('.linked-scrollbar-fixed').attr("data-scrolling", "false");

  $('.linked-scrollbar-fixed').scroll(function(){
      if($(this).attr("data-scrolling") == "false"){
          $('.linked-scrollbar-fixed').not(this).attr("data-scrolling", "true");
          $('.linked-scrollbar-fixed').not(this).scrollTop($(this).scrollTop());
      }
      $(this).attr("data-scrolling", "false");
  });











})
