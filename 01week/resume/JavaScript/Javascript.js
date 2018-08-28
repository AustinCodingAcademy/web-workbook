function sectionSetup(_selectedButton) {
	var article_file = "./html/" + _selectedButton + ".html";
  var sidebar_file = "./html/" + _selectedButton + "SideBar.html";
	modifyArticle(article_file);
	modifySideBar(sidebar_file);
}

function modifyArticle(_currentArticle){
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', _currentArticle, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("MainArticle").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
  }
  
  function modifySideBar(_currentSideBar){
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', _currentSideBar, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("SideNav").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
  }

//Example: make("input", { id: 'example', classList: ["button"], attr: {  "type": "button", "value": 'test', "onclick": "function();" }});
function make(tag_name, opt) {
    var ele = document.createElement(tag_name);
    if (!opt) {
      return ele;
    }
    opt = opt || {};
    opt.classList = opt.classList || [];
    opt.attr = opt.attr || {};
  
    opt.classList.forEach(function(v) {
      ele.classList.add(v);
    });
    if (opt.text) {
      ele.textContent = opt.text;
    }
    if (opt.html) {
      ele.innerHTML = opt.html;
    }
    if (opt.id) {
      ele.id = opt.id;
    }
    if (opt.value) {
      ele.value = opt.value;
    }
    for (var k in opt.attr) {
      if (opt.attr.hasOwnProperty(k)) {
        ele.setAttribute(k, opt.attr[k]);
      }
    }
    if (opt.append) {
      ele.appendChild(opt.append);
    }
    if (opt.appendTo) {
      if (typeof opt.appendTo === 'string') {
        opt.appendTo = document.getElementById(opt.appendTo);
      }
      opt.appendTo.appendChild(ele);
    }
  
    return ele;
  }