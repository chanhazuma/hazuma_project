alert("js kebaca");
document.getElementById("down").addEventListener("click", function(e){
 document.getElementById("header").classList.add("headeractive", "algn-l", "pt20", "bg-glass");
 document.getElementById("footer").classList.remove("pss-abs");
 document.getElementById("footer").classList.add("pss-fx");
 document.getElementById("logo").classList.add("logoactive");
});
document.getElementById("up").addEventListener("click", function(e){
  document.getElementById("header").classList.remove("headeractive", "algn-l", "pt20", "bg-glass");
  document.getElementById("footer").classList.add("pss-abs");
  document.getElementById("footer").classList.remove("pss-fx");
  document.getElementById("logo").classList.remove("logoactive");
});