


var getCom=document.getElementById('getcom');

getCom.onclick = function(){
  var request= new XMLHttpRequest();
 
 request.onreadystatechange = function(){
   if(request.readyState=== XMLHttpRequest.DONE){
       if(request.status===200){
           var coms= request.response;
           coms = JSON.parse(coms);
           var list='';
           for(var i=0;i<coms.length;i++)
           {
               list+='<li>'+coms[i]+'</li>';
           }
           
           var ol=document.getElementById('olist');
           olist.innerHTML='All of the comments are shown as follows : <br><ol style="padding-left:77px">'+list+'</ol>';
       }
       else{
           
           olist.innerHTML='REQUESTS BLOCKED BY SERVER !!';
       }
   }  
 };
 var comment=document.getElementById('com');
comment=comment.value;
request.open('GET','http://deeparsh98.imad.hasura-app.io/a1?newCom='+comment, true);
request.send(null);
    
};
