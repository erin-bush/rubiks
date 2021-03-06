var module = (function (){
  var loadPage = function(page){
    var xhr= new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; 
      document.getElementById('popup').innerHTML= this.responseText;
      document.getElementById('popup').style.display = 'block';
      document.getElementById('popup-container').style.display = 'block';
      document.getElementById('main-content').classList.add('noscroll');
    };
    xhr.send();
  }

  var closePopup = function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('main-content').classList.remove('noscroll');
  }

  return {
    loadPage: loadPage,
    closePopup: closePopup
  };
})();

window.onload = function() {
  twemoji.parse(document.body);
}
