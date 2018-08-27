function sectionSetup(_selectedButton){
  if (_selectedButton === "edu"){
      modifyArticle('./html/Education.html');
      modifySideBar('./html/EducationSideBar.html');
  }else if(_selectedButton === "work"){
      modifyArticle('./html/Work.html');
      modifySideBar('./html/WorkSideBar.html');
  }else if(_selectedButton === "skills"){
      modifyArticle('./html/Skills.html');
      modifySideBar('./html/SkillsSideBar.html');
  }else if(_selectedButton === "portfolio"){
      modifyArticle('./html/Portfolio.html');
      modifySideBar('./html/PortfolioSideBar.html');
  }else if(_selectedButton === "awards"){
      modifyArticle('./html/Awards.html');
      modifySideBar('./html/AwardsSideBar.html');
   }else if(_selectedButton === "probono"){
      modifyArticle('./html/ProBono.html');
     modifySideBar('./html/ProBonoSideBar.html');
}     
      
}

//replace all that up there with 
function sectionSetup(_selectedButton) {
	var article_file = "./html/" + _selectedButton + ".html";
  var sidebar_file = "./html/" + _selectedButton + "SideBar.html";
	modifyArtical(article_file);
	modifySideBar(sidebar_file);
}

  function modifyArticle(_ArticleValue){
    pullArticle(_ArticleValue);
  }
  
  function modifySideBar(_innerSideBar){
    pullSideBar(_innerSideBar);
  }
  
  function pullArticle(_currentArticle){
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', _currentArticle, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("MainArticle").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();

  }
  function pullSideBar(_currentSideBar){
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', _currentSideBar, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("SideNav").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();

  }

//Creating elements
//Example: make("input", { id: 'example', classList: ["button"], attr: {  "type": "button", "value": 'test', "onclick": "onclick();" }});
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
