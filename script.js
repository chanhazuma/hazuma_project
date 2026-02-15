alert("Selamat datang(≧◡≦)💕");
document.getElementById("down").addEventListener("click", function(e){
 document.getElementById("header").classList.add("headeractive", "pt20", "bg-glass");
 document.getElementById("footer").classList.remove("pss-abs");
 document.getElementById("footer").classList.add("pss-fx","ukr-d-hp", "footeractive");
 document.getElementById("logo").classList.add("logoactive");
});
document.getElementById("up").addEventListener("click", function(e){
  document.getElementById("header").classList.remove("headeractive", "pt20", "bg-glass");
  document.getElementById("footer").classList.add("pss-abs");
  document.getElementById("footer").classList.remove("pss-fx", "ukr-d-hp", "footeractive");
  document.getElementById("logo").classList.remove("logoactive");
});