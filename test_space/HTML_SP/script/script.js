//แสดงผล html
/* ปิด */
function Display_html() {
 var inp = document.getElementById("Input")
 var ct = document.getElementById("Content")

 var key = document.getElementById("Key")
 var Rkey = "4r@PcrSJLt2=8jJsW-Gaw#F9-mGZ7aWt&!@$2-WC^!mx9a5UyazntUh=3su?Yww9pLBqMy"

 if( key.value == Rkey ) {
  ct.innerHTML = inp.value
 }
 else {
  ct.innerHTML = "invalid key"
 }

}


