var module = (function (){
  var loadPage = function(page){
    console.log(page);

    var xhr= new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; // or whatever error handling you want
      document.getElementById('popup').innerHTML= this.responseText;
      document.getElementById('popup').style.display = 'block';
      document.getElementById('popup-container').style.display = 'block';

    };
    xhr.send();
  }

  var closePopup = function() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popup-container').style.display = 'none';

  }

  return {
    loadPage: loadPage,
    closePopup: closePopup
  };
})();
