function showMe() {
  console.log('Hi from function');
  var domElement = document.getElementById('sundar');
  console.log(domElement);
  domElement.style = "color:blue";

  var listDomElement = document.getElementById('list');
  listDomElement.style = "display:inline"
}
