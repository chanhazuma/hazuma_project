alert("js kebaca");
document.getElementById("down").addEventListener("click", function(e){
 document.getElementById("header").classList.add("headeractive", "algn-l", "pt20");
});
document.getElementById("up").addEventListener("click", function(e){
  document.getElementById("header").classList.remove("headeractive", "algn-l", "pt20");
});