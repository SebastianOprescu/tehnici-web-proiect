var para = document.createElement("p");
var node = document.createTextNode("This node is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

document.getElementById("div2").innerHTML = "This node was modified"

var el = document.getElementById("div3");
el.remove();