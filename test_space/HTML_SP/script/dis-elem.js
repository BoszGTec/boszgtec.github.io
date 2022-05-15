// เรียกใช้โดย <input type="button" value="-" class="btn btn-primary" id="title-bt2"  onclick="" />

function dis_html(){ 
 if(document.getElementById("dis-html").value != "+"){
  document.getElementById("dis-html").value = "+"
  document.getElementById("Input").disabled = true
 }
 else {
 ava_html()
 }
}

function ava_html(){
 document.getElementById("Input").disabled = false
 document.getElementById("dis-html").value = "-"
}

function dis_css(){
 if(document.getElementById("dis-css").value != "+"){
  document.getElementById("Input-css").disabled = true 
  document.getElementById("dis-css").value = "+"
 }
 else {
  ava_css()
 }
}

function ava_css(){
 document.getElementById("Input-css").disabled = false
 document.getElementById("dis-css").value = "-"
}

