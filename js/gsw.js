/**
 * elem.height == window.innerHeight
 * 
 */
var modal = document.getElementById('modalbox');
windowHeight(modal);
windowHeight(document.body);
window.onresize = function () {
  windowHeight(modal);
  windowHeight(document.body);
}

function windowHeight(elem) {
  elem.style.height = window.innerHeight + 'px';
}
/**
 * modalbox animate
 */
 var bar = document.getElementById('bar');
 bar.onclick = function () {
   if (modal.style.left == "0em") {
    modal.style.left = "-14em";
   }else{
    modal.style.left = "0em";
   }
 }

/**
 * checkbox click event
 */
var checkbox = document.getElementsByClassName('checkbox');
for (var i = 0; i < checkbox.length; i++) {
  checkbox[i].onclick = function () {
    if(this.className == "checkbox"){
      this.className = "checkbox done";
    }else{
      this.className = "checkbox";
    }
  }
}
/**
 * add click and add ul
 */
var add = document.getElementById('add');
add.onclick = function () {
  var tmp = '';
  tmp = '<ul>'
        + '<li>' + time
}
