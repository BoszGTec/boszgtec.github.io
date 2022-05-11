//แสดงผล html,css
/* ปิด */
function Display_html() {
 var inp = document.getElementById("Input")
 var inp_css = document.getElementById("Input-css")
 var ct = document.getElementById("Content")

 var key = document.getElementById("Key")
 var Rkey = "4r@PcrSJLt2=8jJsW-Gaw#F9-mGZ7aWt&!@$2-WC^!mx9a5UyazntUh=3su?Yww9pLBqMy"

 if( key.value == Rkey ) {
  key.readOnly = true
  ct.innerHTML = "<style>"+inp_css.value+"</style>"
  ct.innerHTML += inp.value
 }
 else {
  ct.innerHTML = "invalid key"
  key.readOnly = false
 }

}










