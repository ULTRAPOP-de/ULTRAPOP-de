document.querySelectorAll("#menu a").forEach(function(link){
  link.addEventListener("click", function(){
    document.querySelector("#menuToggle input").checked = false;
  });
});