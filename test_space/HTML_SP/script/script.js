//แสดงผล html
/* ปิด */
function Display_html() {
 var inp = document.getElementById("Input")
 var ct = document.getElementById("Content")

 var key = document.getElementById("Key")
 var Rkey = "4r@PcrSJLt2=8jJsW-Gaw#F9-mGZ7a"

 if( key.value == Rkey ) {
  ct.innerHTML = inp.value
 }
 else {
  ct.innerHTML = "invalid key"
 }

}


