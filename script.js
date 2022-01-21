function typingstart(line,text,time){
    console.log('typingstart by bossgeeg123456@gmail.com')
    var name=document.getElementById('name')
    name.style.opacity="0%"
    var x=0
    for(var i=0;i<text.length;i++)
    {   setTimeout(()=>{
            var typing=document.getElementsByClassName('typingstart')[line]
            typing.innerHTML+=text[x]
            typing=""
            x+=1
        },time*(i+1))
        x=0
    }
    setTimeout(
        ()=>{
            name.style.opacity="100%"
        },time*(i+2)
    )
  name=""
    clearTimeout()
}
function settext_for_tying(line,text,time){
    typingstart(line,text,time)
}
