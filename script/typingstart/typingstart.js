function typingstart(line,text,time,outtext){
    console.log('typingstart by bossgeeg123456@gmail.com')
    console.log(text)
    if(outtext){
        var name=document.getElementById('name')
        name.style.opacity="0%"
    }
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
    if(outtext){
        setTimeout(
            ()=>{
                name.style.opacity="100%"
            },time*(i+2)
        )
        }
    clearTimeout()
}
function settext_for_tying(line,text,time,outtext){
    typingstart(line,text,time,outtext)
}
