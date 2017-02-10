var button= document.getElementById('counter');

var cnter=0;

button.onlclick = function(){
    
    
  cnter=cnter+1;
  var span=document.getElementById('count');
  span.innerHTML= cnter.toString();
};