  $(document).ready(function(){
      var random_bg=Math.floor(Math.random()*4+1);
      var bg='url(../images/background-cover'+random_bg+'.jpg) top left no-repeat #666666';
      $(".panel-cover").css("background",bg );
});