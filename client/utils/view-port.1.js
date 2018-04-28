

export default (function(win,doc){
    var docEl = document.documentElement
    var resizeEventName = "orientationchange" in win ? "orientationchange" : "resize"
    var resizeHandle = function(){
        var winWidth = docEl.clientWidth
        if(!winWidth)return
        docEl.style.fontSize = clientWidth/7.5 + 'px'
    }
    if(!doc.addEventListener)return
    win.addEventListener(resizeEventName, resizeHandle, false)
    doc.addEventListener("DOMContentLoaded", resizeHandle, false)
})(window,document)