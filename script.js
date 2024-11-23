var device = "null"

const ua = navigator.userAgent
if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
  device = "phone"
} else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  device = "tablet"
} else {
  device = "dektop"
}
if (device == "phone") {
  document.getElementById("newscontainer").style.display = "block";
  document.getElementById("newscontainer").style.padding = "0px";
  document.getElementById("newscontainer").style.top = "250px";
  document.getElementById("beotw").style.display = "block";
  document.getElementById("beotw").style.borderRight = "none";
  document.getElementById("game").style.borderLeft = "none";
  document.getElementById("rumours").style.borderLeft = "none";
  document.getElementById("other").style.borderLeft = "none";
  document.getElementById("header").style.height = "30%";

}

var w = window.innerWidth;


if (w<=750) {
    document.getElementById("newscontainer").style.display = "block";
    document.getElementById("newscontainer").style.padding = "0px";
    document.getElementById("beotw").style.display = "block";
    document.getElementById("game").style.borderLeft = "none";
    document.getElementById("rumours").style.borderLeft = "none";
    document.getElementById("other").style.borderLeft = "none";
}
function goback(){
  window.location.href = document.referrer;
}