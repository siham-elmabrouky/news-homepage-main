const borger = document.querySelector('.borger');
const clos = document.querySelector('.close');
const links = document.querySelector('.links');
 borger.addEventListener("onclick",()=>{
    links. style.display ='block';
})
borger.onclick = function(){
    links. style.display ='block'; 
   clos. style.display ='block'; 
   borger. style.display ='none'; 

  

}
clos.onclick = function(){
    links. style.display ='none'; 
   clos. style.display ='none'; 
   borger. style.display ='block'; 
 
}