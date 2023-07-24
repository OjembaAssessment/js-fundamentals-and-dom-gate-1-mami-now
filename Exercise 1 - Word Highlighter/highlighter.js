let arr= document.getElementById('myParagraph');
let newArray = Array.prototype.map.call(arr.childNodes, function(node) {
  return node.nodeType ===" common ";
     
});
console.log(newArray);