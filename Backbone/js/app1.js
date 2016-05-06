window.onload = function() {
    
}
function buttonClick() {
    alert("Button1 Clicked")
}
var button2Click = function() {
    alert("Button2 Clicked")
}
function changeBackground(el) {
    document.body.style.backgroundColor = el.getAttribute("data-color")
}
