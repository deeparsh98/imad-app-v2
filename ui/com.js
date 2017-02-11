


var getCom=document.getElementById('getcom');

getCom.onclick = function(){
  var request= new XMLHttpRequest();
 
 request.onreadystatechange = function(){
   if(request.readyState=== XMLHttprequest.DONE){
       if(request.status===200){
           var comments= request.response;
           comments = JSON.parse(comments);
           var list='';
           for(var i=0;i<comments.length;i++)
           {
               list+='<li>'+comments[i]+'</li>';
           }
           
           var ol=document.getElementById('olist');
           olist.innerHTML=list;
       }
   }  
 };
 var comment=document.getElementById('com');
comment=comment.value;
request.open('GET','http://deeparsh98.imad.hasura-app.io/a1/comments?='+comment, true);
request.send(null);
    
};
