var module = (function (){
  var loadPage = function(page){
    console.log(page);

    var xhr= new XMLHttpRequest();
    xhr.open('GET', page, true);
    xhr.onreadystatechange= function() {
      if (this.readyState!==4) return;
      if (this.status!==200) return; // or whatever error handling you want
      document.getElementById('y').innerHTML= this.responseText;
      console.log(this.responseText);
    };
    xhr.send();
  }

  return {
    loadPage: loadPage
  }
})();
