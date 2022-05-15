// เรียกใช้โดย <input type="button" value="-" class="btn btn-primary" id="title-bt2"  onclick="" />

function dis_html(){
 document.getElementById("Input").disabled = true 
 document.getElementById("dis-html").value = "+"
 document.getElementById("dis-html").onclick = "ava_html()"
}

function ava_html(){
 document.getElementById("Input").disabled = false
 document.getElementById("dis-html").value = "-"
 document.getElementById("dis-html").onclick = "dis_html()"
}

function dis_css(){
 document.getElementById("Input").disabled = true 
 document.getElementById("dis-css").value = "+"
 document.getElementById("dis-css").onclick = "ava_html()"
}

function ava_css(){
 document.getElementById("Input").disabled = false
 document.getElementById("dis-css").value = "-"
 document.getElementById("dis-css").onclick = "dis_html()"
}

