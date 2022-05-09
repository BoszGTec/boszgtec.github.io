//input from : <input id="ct-height" style="width: 200px ;" type="range" class="form-range" min="100" max="1000" / >    
function resize-ct(){
 var ct = document.getElementById("Content")
 var ct-h = document.getElementById("ct-height")
 ct.style = " height : " + ct-h.value + "px ;"
}
