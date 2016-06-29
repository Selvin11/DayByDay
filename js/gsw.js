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
// click add btn and show the edit area
var add = document.getElementById('add');
var textarea = document.getElementById('text');
var editArea = document.getElementsByClassName('edit-area')[0];
add.onclick = function () {
  // lock textarea mouseteer
  if (editArea.style.display === 'none') {
    editArea.style.display = 'block';
    add.style.transform = 'rotate3d(0, 0, 1, -45deg)';
  }else{
    editArea.style.display = 'none';
    add.style.transform = '';
  }
}

var middle = document.getElementById('middle');
// get time
var weektime = document.getElementById('weektime');
var now = new Date();
var weekday = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
weektime.innerHTML = '今天 ' + weekday[now.getDay()];
// set date
var date = document.getElementById('date');
date.value = (now.toJSON()).slice(0,10);
// click comfirm and show edit-area
var comfirm = document.getElementById('comfirm');


// click comfirm after , add the content to middle
comfirm.onclick = function () {
  var tmp = '';
  tmp = '<li>'
          + '<time>' + date.value + '</time>'
          + '<div class="content">'
          + '<span class="checkbox"></span>'
          + '<input type="text" class="write" value="' + textarea.value + '">'
          + '</div>'
        + '</li>';
  // create a parent container and push it to middle container
  var ul = document.createElement('ul');
  ul.innerHTML = tmp;
  middle.appendChild(ul);
  //clear textarea messeage
  textarea.value = '';

  // again for in checkbox
    for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = function () {
      if(this.className == "checkbox"){
        this.className = "checkbox done";
        this.nextSibling.style.textDecoration = 'line-through';
      }else{
        this.className = "checkbox";
        this.nextSibling.style.textDecoration = 'none';
      }
    }
  }
  // checkbox for end


      // for list about all / complete / uncomplete / about
      var all = document.getElementById('all'),
          complete = document.getElementById('complete'),
          uncomplete = document.getElementById('uncomplete'),
          about = document.getElementById('about');
      all.onclick = function () {
        for (var i = 0; i < middle.children.length; i++) {
          middle.children[i].style.display = 'block';
        }
      };
      complete.onclick = function () {
        for (var i = 0; i < checkbox.length; i++) {
          if (checkbox[i].className == "checkbox done") {
            checkbox[i].parentElement.parentElement.parentElement.style.display = 'block';
          }else{
            checkbox[i].parentElement.parentElement.parentElement.style.display = 'none';
          }
        }
        
      };
      uncomplete.onclick = function () {
        for (var i = 0; i < checkbox.length; i++) {
          if (checkbox[i].className == "checkbox done") {
            checkbox[i].parentElement.parentElement.parentElement.style.display = 'none';
          }else{
            checkbox[i].parentElement.parentElement.parentElement.style.display = 'blcok';
          }
        }
      }

      about.onclick = function () {
        for (var i = 0; i < checkbox.length; i++) {
          checkbox[i].parentElement.parentElement.parentElement.style.display = 'none';
        }
        var aboutCon = document.getElementById('about-content');
        if(aboutCon.style.display == "none"){
          aboutCon.style.display = 'block';
        }else{
          aboutCon.style.display = 'none';
        }
      }
}
about.onclick = function () {
        var aboutCon = document.getElementById('about-content');
        if(aboutCon.style.display == "none"){
          aboutCon.style.display = 'block';
        }else{
          aboutCon.style.display = 'none';
        }
      }







