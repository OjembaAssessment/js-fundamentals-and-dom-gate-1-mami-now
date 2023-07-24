let arr= document.getElementById('myParagraph');

// let newArray = arr.split(' ');


let newArray=Array.prototype.map.call(arr.childNodes, function(node) {
  return node.nodeType === arr;
     
});
console.log(newArray);