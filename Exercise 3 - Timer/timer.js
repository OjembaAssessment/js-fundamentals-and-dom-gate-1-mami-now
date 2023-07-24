const timer = document.getElementById('myTimer');
let second=29;
let addOnes=document.getElementById('addOne');
addOnes.addEventListener('click',function(){
  return second=second+1;
});
let minOnes=document.getElementById('minOne');
minOnes.addEventListener('click', function(){
  return second=second-1;
});
let starts=document.getElementById('start');
starts.addEventListener('click',function(){
  return second=29;
})
let reset=document.getElementById('reset');
reset.addEventListener('click',function(){
  return second=0;
  })

let stopWatch= setInterval(function(){
  if(second <= 0){
    clearInterval(stopWatch);
  }
  timer.textContent=second;
  second--
},1000)
