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
  document.getElementById("beotw").style.display = "block";
}

var w = window.innerWidth;


if (w<=750) {
    document.getElementById("newscontainer").style.display = "block";
    document.getElementById("newscontainer").style.padding = "0px";
    document.getElementById("beotw").style.display = "block";
}