console.log('Loaded!');
var element=document.getElementById('madi');

var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    
    madi.style.marginLeft=marginLeft+'px';
}

madi.onclick = function(){
    var interval=setInterval(moveRight,30);
};


