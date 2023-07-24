let arr= document.getElementById('myParagraph');

// let newArray = arr.split(' ');


Array.prototype.map.call(arr.childNodes, function(node) {
  return node.nodeType === arr;
     
});
console.log(newArray);