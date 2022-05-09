//input from : <input id="ct-height" style="width: 200px ;" type="range" class="form-range" min="100" max="1000" / >    
function re_ct(){
 var ct = document.getElementById("Content")
 var ct_h = document.getElementById("ct-height")
 ct.style = " height : " + ct_h.value + "px ;"
 ct.innerText = " height : " + ct_h.value + "px ;"
}
