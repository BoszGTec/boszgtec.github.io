//แสดงผล html,css
/* ปิด */
function Display_html() {
 var inp = document.getElementById("Input")
 var inp_css = document.getElementById("Input-css")
 var ct = document.getElementById("Content")

 var key = document.getElementById("Key")
 var Rkey = c_key()

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

