function fontsize(){
    let width=document.documentElement.clientWidth;
    if(width>=750)width=750;
    let fs=width/7.5;
    document.documentElement.style.fontSize=fs+'px'
}
fontsize()
window.onresize=function(){
    fontsize()
}