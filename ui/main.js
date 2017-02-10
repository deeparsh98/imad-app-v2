var button= document.getElementById('counter');

button.onclick = function(){
    var request= new XMLHttpRequest();
    
    request.onreadystatechange= function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
                var cnter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML= cnter.toString();
          }
      }
    };
    
  request.open('GET','http://deeparsh98.imad.hasura-app.io/counter', true);
  request.send(null);
};


var submit=document.getElementById('submit_btn');
submit.onclick = function(){
     var request= new XMLHttpRequest();
    
    request.onreadystatechange= function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
               var names=request.response;
               names=JSON.parce(names);
    
                var list='';
                for(var i=0;i<names.length;i++)
                {
                    list+= '<li>'+names[i]+'</li>';
                
                }
                var ui= document.getElementById('listNames');
                ui.innerHTML=list;
                           
          }
      }
    
    };
    var nameInput = document.getElementById('name');
    var name= nameInput.value;
    
  request.open('GET','http://deeparsh98.imad.hasura-app.io/submit-name?name='+ name, true);
  request.send(null);
   
};