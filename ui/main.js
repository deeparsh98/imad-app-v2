var button= document.getElementById('counter');

button.onclick = function(){
    var request= new XMLhttpRequest();
    
    request.onreadystatechange= function(){
      if(request.readyState === XMLhttpRequest.DONE){
          if(request.status === 200){
                cnter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML= cnter.toString();
          }
      }
    };
    
  request.open('GET','http://deeparsh98.imad.hasura-app.io/counter', true);
  request.send(null);
};